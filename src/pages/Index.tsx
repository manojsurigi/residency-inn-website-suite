
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the main hotel website
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to The Rose Residency Inn...</h1>
        <p className="text-xl text-muted-foreground">Please wait while we take you to our beautiful hotel website.</p>
      </div>
    </div>
  );
};

export default Index;
