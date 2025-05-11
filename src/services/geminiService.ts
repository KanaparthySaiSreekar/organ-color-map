
/**
 * Service for interacting with the Gemini API
 */

// Function to generate a description from an image using Gemini API
export async function generateImageDescription(imageBase64: string): Promise<string> {
  try {
    // Remove data URL prefix if present
    const base64Data = imageBase64.includes('base64,') 
      ? imageBase64.split('base64,')[1]
      : imageBase64;
    
    const response = await fetch('http://localhost:5000/generate_description', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64Data }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate description');
    }

    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error generating image description:', error);
    throw new Error('Failed to generate description. Please try again.');
  }
}
