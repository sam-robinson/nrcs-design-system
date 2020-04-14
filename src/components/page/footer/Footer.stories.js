import React from "react";
import { Footer } from "./Footer.js";
import { FooterNrcsDesignSystem } from "./FooterNrcsDesignSystem.js";

export default {
  title: "Page Components|Footer"
};

export const StoryFooter = () => {
  return (
    <div>
      <h2 className="docs">Footer</h2>
      <p>
        Default Footer component based on the FPAC footer, a responsive layout
        with 3 columns that include standard links along with agency,
        organization, and application specific links as shown.
      </p>

      <Footer />
    </div>
  );
};

export const StoryFooterNrcsDesignSystem = () => {
  return (
    <div>
      <h2 className="docs">Footer</h2>
      <p>Footer component for the NRCS Design System website.</p>

      <FooterNrcsDesignSystem />
    </div>
  );
};

StoryFooter.story = {
  name: "Footer"
};

StoryFooterNrcsDesignSystem.story = {
  name: "Footer - NRCS Design System"
};
