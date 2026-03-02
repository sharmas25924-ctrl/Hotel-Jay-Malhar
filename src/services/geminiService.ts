import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Assistant for 'Hotel Jay Malhar', a premium restaurant specializing in authentic Maharashtrian cuisine. 
        Your tone is warm, hospitable, and knowledgeable.
        
        Key Information:
        - Specialties: Mutton Thali, Pithla Bhakri, Chicken Sukka, Solkadhi, Puran Poli.
        - Location: Opp. Hp Petrol Pump, Marunji Goan.
        - Experience: Traditional Gavran (rural) taste with modern hospitality.
        - Ambience: Rustic yet elegant.
        
        Answer questions about the menu, ingredients, and the Maharashtrian culinary tradition. If asked about reservations or contact, tell them to use the form on the website, email hoteljaymalhar7373@gmail.com, or call +91 9923751248.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or call us directly!";
  }
};
