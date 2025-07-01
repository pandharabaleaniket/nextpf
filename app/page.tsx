import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-cyan-500 to-pacific-cyan-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-federal-blue-500 mb-4">
            Blue Ocean Theme
          </h1>
          <p className="text-honolulu-blue-600 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            laudantium nisi a atque, nobis aut inventore? Perspiciatis voluptatem
            illo, repellendus expedita, facilis architecto porro quidem esse
            consequatur reiciendis rerum maxime!
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-federal-blue-500 hover:bg-federal-blue-600">
              Federal Blue
            </Button>
            <Button 
              variant="outline" 
              className="border-honolulu-blue-500 text-honolulu-blue-600 hover:bg-honolulu-blue-50"
            >
              Honolulu Blue
            </Button>
            <Button className="bg-pacific-cyan-500 hover:bg-pacific-cyan-600">
              Pacific Cyan
            </Button>
          </div>
        </div>
        
        {/* Color Palette Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Federal Blue */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-federal-blue-700 mb-3">Federal Blue</h3>
            <div className="space-y-2">
              <div className="h-8 bg-federal-blue-100 rounded flex items-center justify-center text-xs">100</div>
              <div className="h-8 bg-federal-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-federal-blue-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-federal-blue-700 rounded flex items-center justify-center text-xs text-white">700</div>
              <div className="h-8 bg-federal-blue-900 rounded flex items-center justify-center text-xs">900</div>
            </div>
          </div>
          
          {/* Honolulu Blue */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-honolulu-blue-700 mb-3">Honolulu Blue</h3>
            <div className="space-y-2">
              <div className="h-8 bg-honolulu-blue-100 rounded flex items-center justify-center text-xs text-white">100</div>
              <div className="h-8 bg-honolulu-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-honolulu-blue-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-honolulu-blue-700 rounded flex items-center justify-center text-xs text-white">700</div>
              <div className="h-8 bg-honolulu-blue-900 rounded flex items-center justify-center text-xs">900</div>
            </div>
          </div>
          
          {/* Pacific Cyan */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-pacific-cyan-700 mb-3">Pacific Cyan</h3>
            <div className="space-y-2">
              <div className="h-8 bg-pacific-cyan-100 rounded flex items-center justify-center text-xs text-white">100</div>
              <div className="h-8 bg-pacific-cyan-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-pacific-cyan-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-pacific-cyan-700 rounded flex items-center justify-center text-xs">700</div>
              <div className="h-8 bg-pacific-cyan-900 rounded flex items-center justify-center text-xs">900</div>
            </div>
          </div>
          
          {/* Non Photo Blue */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-non-photo-blue-600 mb-3">Non Photo Blue</h3>
            <div className="space-y-2">
              <div className="h-8 bg-non-photo-blue-100 rounded flex items-center justify-center text-xs text-white">100</div>
              <div className="h-8 bg-non-photo-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-non-photo-blue-500 rounded flex items-center justify-center text-xs">500</div>
              <div className="h-8 bg-non-photo-blue-700 rounded flex items-center justify-center text-xs">700</div>
              <div className="h-8 bg-non-photo-blue-900 rounded flex items-center justify-center text-xs">900</div>
            </div>
          </div>
          
          {/* Light Cyan */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-light-cyan-400 mb-3">Light Cyan</h3>
            <div className="space-y-2">
              <div className="h-8 bg-light-cyan-100 rounded flex items-center justify-center text-xs text-white">100</div>
              <div className="h-8 bg-light-cyan-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-light-cyan-500 rounded flex items-center justify-center text-xs">500</div>
              <div className="h-8 bg-light-cyan-700 rounded flex items-center justify-center text-xs">700</div>
              <div className="h-8 bg-light-cyan-900 rounded flex items-center justify-center text-xs">900</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}