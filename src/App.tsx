import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import './App.css'
import TodaySummary from "./pages/TodaySummery";
import ActiveChats from "./pages/ActiveChats";
import HistoryStatistics from "./pages/HistoryStatistics";
import Preferences from "./pages/Preferences";

const queryClient = new QueryClient();

const AppContent = () => {
    const location = useLocation();
    const showSidebar = !["/login"].includes(location.pathname);

    return (
        <div className="min-h-screen bg-background flex">
            {showSidebar && <Sidebar />}
            <div className="p-8 w-full">
                <Routes>
                    <Route path="/" element={<TodaySummary />} />
                    <Route path="/active-chats" element={<ActiveChats />} />
                    <Route path="/history" element={<HistoryStatistics />} />
                    <Route path="/preferences" element={<Preferences />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
