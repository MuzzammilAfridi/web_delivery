
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi! I'm interested in your services.");
  
  // Replace with your actual WhatsApp number
  const phoneNumber = "15551234567"; // Format: country code + number, no plus sign or spaces
  
  const handleOpenWhatsApp = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Log event
    console.log("WhatsApp chat initiated");
    toast.success("Opening WhatsApp");
    
    // Close the chat bubble
    setIsOpen(false);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat bubble */}
      {isOpen && (
        <div className="mb-4 w-72 rounded-lg bg-white shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-green-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-sm">Contact us on WhatsApp</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Chat with our team for quick support and information about our services.
            </p>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md mb-3 text-sm"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            ></textarea>
            <Button
              onClick={handleOpenWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Start Chat
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* WhatsApp floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full p-3 sm:p-5 text-white shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={28} />
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;
