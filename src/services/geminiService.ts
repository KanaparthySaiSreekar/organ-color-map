
/**
 * Service for interacting with the Gemini API
 * Mock implementation for demo purposes
 */

// Function to generate a description from an image using Gemini API (mock for demo purposes)
export async function generateImageDescription(imageBase64: string): Promise<string> {
  // For demo purposes, we'll return a mock response
  // This simulates a response from the Gemini API without needing a backend
  console.log("Mock Gemini API called with image data");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock description
  return "This segmented medical image shows multiple colored regions representing different organs. The liver appears in red in the upper portion, while the kidneys are visible in green on either side of the spine. The spleen is represented in blue in the upper left quadrant. The segmentation successfully identifies and isolates these key abdominal organs with clear boundaries between tissue types, which could be useful for surgical planning or anatomical education.";
}

// Mock function to process an image (replaces backend API call)
export async function processImage(file: File): Promise<Blob> {
  console.log("Mock image processing called");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // For demo purposes, we'll use a pre-segmented sample image
  // In a real application, this would be the result of processing on the backend
  const segmentedImageURL = 'https://i.imgur.com/ZsZPjrE.png'; // Sample segmented image
  
  // Fetch the sample image and return it as a blob
  const response = await fetch(segmentedImageURL);
  return await response.blob();
}
