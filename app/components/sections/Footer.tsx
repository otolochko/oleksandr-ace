import { FileText } from "lucide-react";

interface FooterProps {
  footer: {
    footer: string;
  };
}

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500">
      <div className="flex justify-center items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
        <span className="font-semibold text-slate-700">Atlassian Solution Paper Adaptation</span>
      </div>
      <p className="text-sm">{footer.footer}</p>
    </footer>
  );
};

export default Footer;
