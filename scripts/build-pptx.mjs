import { execSync } from "node:child_process";
import fs from "node:fs";
import { resolve } from "node:path";
import PptxGenJS from "pptxgenjs";

const RED = "D0103A";
const RED_DEEP = "A50C2D";
const BLUE = "1B3A6B";
const BLUE_DEEP = "10243F";
const PAPER = "F7F7F9";
const INK = "16233A";
const MUTED = "5C6779";
const GOLD = "F2B233";
const WHITE = "FFFFFF";

// Pre-process image asset
const assetDir = resolve("/tmp/deck/assets");
fs.mkdirSync(assetDir, { recursive: true });

const img = (p) => `image/${p.endsWith(".png") ? "png" : "jpeg"};base64,${fs.readFileSync(p).toString("base64")}`;

const LOGO = img("public/tm-pick n pay logo rectangle.jpg");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9"; // 10 x 5.625 in
const W = 10;
const H = 5.625;
const HEAD = "Georgia";
const BODY = "Calibri";

function chrome(slide, kicker, n, dark = false) {
  slide.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 0.28, w: 1.75, h: 0.42, fill: { color: WHITE }, line: { color: WHITE }, rectRadius: 0.08 });
  slide.addImage({ data: LOGO, x: 0.54, y: 0.35, w: 1.56, h: 0.22 });
  slide.addText(kicker.toUpperCase(), { x: 2.35, y: 0.32, w: W - 3.0, h: 0.35, fontFace: BODY, fontSize: 10.5, bold: true, charSpacing: 1.5, color: dark ? WHITE : RED });
  slide.addText(String(n).padStart(2, "0"), { x: W - 1.0, y: 0.32, w: 0.55, h: 0.35, align: "right", fontFace: BODY, fontSize: 11, bold: true, color: dark ? "AAB6C8" : MUTED });
  
  slide.addText("TM Pick n Pay Express — Agnostic Marketplace Infrastructure", { x: 0.45, y: H - 0.45, w: 5, h: 0.3, fontFace: BODY, fontSize: 9, color: dark ? "8C9BB0" : MUTED });
  slide.addText("Confidential · Strategic Proposal", { x: W - 5.45, y: H - 0.45, w: 5, h: 0.3, align: "right", fontFace: BODY, fontSize: 9, color: dark ? "8C9BB0" : MUTED });
}

function title(slide, text, dark, y = 0.88) {
  slide.addText(text, { x: 0.45, y, w: W - 0.9, h: 0.75, fontFace: HEAD, fontSize: 24, bold: true, color: dark ? WHITE : BLUE });
}

function card(slide, { x, y, w, h, heading, body, accent = RED, dark = false, hs = 13, bs = 10 }) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, fill: { color: dark ? "1E426F" : WHITE }, line: { color: dark ? "1E426F" : "E2E5EB" }, rectRadius: 0.08 });
  slide.addShape(pptx.ShapeType.roundRect, { x: x + 0.2, y: y + 0.18, w: 0.45, h: 0.055, fill: { color: accent }, line: { color: accent }, rectRadius: 0.03 });
  slide.addText(heading, { x: x + 0.2, y: y + 0.3, w: w - 0.4, h: 0.45, fontFace: HEAD, fontSize: hs, bold: true, color: dark ? WHITE : BLUE, margin: 0, valign: "top" });
  slide.addText(body, { x: x + 0.2, y: y + 0.8, w: w - 0.4, h: h - 0.9, fontFace: BODY, fontSize: bs, color: dark ? "D5DEEA" : MUTED, margin: 0, valign: "top" });
}

/* Slide 1: Cover Page & The Agnostic Vision */
{
  const s = pptx.addSlide();
  s.background = { color: BLUE_DEEP };
  
  s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 0.45, w: 2.2, h: 0.55, fill: { color: WHITE }, line: { color: WHITE }, rectRadius: 0.08 });
  s.addImage({ data: LOGO, x: 0.55, y: 0.53, w: 2.0, h: 0.38 });
  
  s.addText("STRATEGIC PROPOSAL: NEXT-GENERATION AGNOSTIC MARKETPLACE", { x: 0.45, y: 1.5, w: 9, h: 0.3, fontFace: BODY, fontSize: 11, bold: true, charSpacing: 2, color: GOLD });
  s.addText("The Agnostic Marketplace & Last-Mile Infrastructure Platform", { x: 0.45, y: 1.85, w: 9, h: 0.85, fontFace: HEAD, fontSize: 28, bold: true, color: WHITE });
  s.addText("Unifying Retail Networks, Diaspora Shoppers, and Informal Traders Through Open Digital Architecture", { x: 0.45, y: 2.75, w: 9, h: 0.5, fontFace: BODY, fontSize: 13, color: "D5DEEA" });
  
  s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 3.35, w: 1.5, h: 0.08, fill: { color: RED }, line: { color: RED }, rectRadius: 0.04 });
  
  s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 3.55, w: 9.1, h: 1.25, fill: { color: "1E426F" }, line: { color: "1E426F" }, rectRadius: 0.08 });
  s.addText("STRATEGIC POSITIONING", { x: 0.65, y: 3.68, w: 8.7, h: 0.25, fontFace: BODY, fontSize: 9.5, bold: true, charSpacing: 1.5, color: GOLD });
  s.addText("An open-architecture, multi-tenant marketplace framework with TM Pick n Pay uniquely positioned as the primary anchor retail tenant and wholesale backbone driving the entire shared consumer ecosystem.", { x: 0.65, y: 3.93, w: 8.7, h: 0.75, fontFace: BODY, fontSize: 11, color: WHITE });
  
  s.addText("Prepared for: The Executive Leadership Team, TM Pick n Pay · Core Strategy: Open Marketplace Framework from Inception", { x: 0.45, y: 5.0, w: 9, h: 0.3, fontFace: BODY, fontSize: 10, color: "9FB0C6" });
}

/* Slide 2: Strategic Context & System Boundaries */
{
  const s = pptx.addSlide();
  s.background = { color: PAPER };
  chrome(s, "Slide 02 · Strategic Context & System Boundaries", 2);
  title(s, "Independent Strategic Outlook & Framework Boundaries");
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "Independent Analysis", accent: BLUE, body: "Formulated as an external macro-market framework with a limited understanding of internal, proprietary initiatives. Serves as an objective external valuation model." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Strategic Repositioning", accent: RED, body: "Designed as an agile mechanism to optimize physical retail distribution, sales, and marketing — driving volume throughput across existing corporate assets." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "Anchor Infrastructure", accent: BLUE, body: "Explicitly leverages established physical retail networks in key structured cities as anchor infrastructure through which optimization and last-mile logistics are executed." });
}

/* Slide 3: The Macro Reality: Navigating the "Abnormal P&L" */
{
  const s = pptx.addSlide();
  s.background = { color: BLUE_DEEP };
  chrome(s, "Slide 03 · The Macro Reality", 3, true);
  title(s, "Operating and Structuring within an Informal Economy", true);
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "The Landscape Reality", accent: GOLD, dark: true, body: "The economy has become highly informalized. While specific geographies remain structured enough for brick-and-mortar stores, traditional retail models face severe constraints." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "The Financial Shift", accent: RED, dark: true, body: "Evaluating financial structures based on historical 'normalcy' is impossible; the market presents an abnormal P&L environment demanding non-traditional revenue capture models." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "The Strategic Pivot", accent: GOLD, dark: true, body: "Instead of protecting a rigid, static balance sheet, corporate strategy must pivot off traditional normalcy to invest in operational adaptability. These digital infrastructure investments transform operational expenses directly into catalysts for sustainability." });
}

/* Slide 4: Core Value Proposition: The Three Pillars */
{
  const s = pptx.addSlide();
  s.background = { color: PAPER };
  chrome(s, "Slide 04 · Core Value Proposition", 4);
  title(s, "Closing the Systemic Retail Gap");
  
  s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 1.6, w: 9.1, h: 0.45, fill: { color: WHITE }, line: { color: "E2E5EB" }, rectRadius: 0.08 });
  s.addText("THREE-WAY INTEGRATION: Closing a massive distribution gap by seamlessly integrating three distinct market vectors.", { x: 0.65, y: 1.6, w: 8.7, h: 0.45, fontFace: BODY, fontSize: 10.5, bold: true, color: BLUE, valign: "middle" });
  
  const cw = 2.9, ch = 3.0;
  card(s, { x: 0.45, y: 2.2, w: cw, h: ch, heading: "Customer Closeness", accent: RED, body: "Re-establishing direct customer connection ('Know Your Customer'). Building digital visibility into household preferences, frequency, and spending triggers." });
  card(s, { x: 0.45 + cw + 0.2, y: 2.2, w: cw, h: ch, heading: "Informal Market Participation", accent: BLUE, body: "Formally participating in the decentralized, high-volume informal retail traders market — converting tuck shops and informal vendors into wholesale extension nodes." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 2.2, w: cw, h: ch, heading: "Cross-Border Volumes", accent: GOLD, body: "Capturing the massive corridor of people outside the country who actively fund and assist their families back home, routing foreign capital into local retail settlement." });
}

/* Slide 5: Platform Foundation: Intelligence Commerce */
{
  const s = pptx.addSlide();
  s.background = { color: BLUE_DEEP };
  chrome(s, "Slide 05 · Platform Foundation", 5, true);
  title(s, "The Catalyst for Profitability, Sustainability, and Adaptability", true);
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "The Core Moat", accent: RED, dark: true, body: "In an informalized economy, not knowing, not following, or not incentivizing your customer is the single greatest risk—making active customer data tracking the ultimate competitive differentiator." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Ecosystem Architecture", accent: GOLD, dark: true, body: "The entire marketplace ecosystem is underpinned by a robust corporate data lake and AI-driven Intelligent Commerce — enabling predictive demand forecasting and dynamic pricing." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "The Strategic Outcome", accent: WHITE, dark: true, body: "Data intelligence acts as the direct operational engine that secures predictable, sustainable corporate margins and enables continuous adaptability to shifting consumer trends." });
}

/* Slide 6: Platform Design: Open API & Multi-Tenancy */
{
  const s = pptx.addSlide();
  s.background = { color: PAPER };
  chrome(s, "Slide 06 · Platform Design", 6);
  title(s, "Multi-Tenant Architecture vs. Application Silos");
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "Agnostic Inception", accent: RED, body: "Built from day one as an open-ended, multi-tenant marketplace framework, explicitly rejecting single-retailer application restrictions and siloed architectures." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Open Connectivity", accent: BLUE, body: "Accessible to any vetted external retailer, boutique vendor, or third-party logistics provider via secure, high-throughput API integrations." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "Enterprise Segregation", accent: RED, body: "Drives massive market transaction volumes across the grid while preserving the capacity for anchor enterprise tenants to partition secure, white-labeled private spaces." });
}

/* Slide 7: Distribution Strategy: Informal Network Extension */
{
  const s = pptx.addSlide();
  s.background = { color: PAPER };
  chrome(s, "Slide 07 · Distribution Strategy", 7);
  title(s, "Decentralized Footprint Expansion Without Capital Expense");
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "Corporate as Distributor", accent: RED, body: "Repositions the anchor retailer to step in as the primary bulk wholesale distributor to independent informal retail networks, capturing previously unreachable transaction volumes." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Gray Market Displacement", accent: BLUE, body: "Displaces un-policed cross-border gray trading, unmanaged tax leakage, and counterfeit products by feeding verified, high-quality corporate inventory straight into local communities." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "Logistical Moats", accent: GOLD, body: "Integrates affiliated informal local traders as decentralized localized distribution and collection nodes, bypassing brick-and-mortar expansion costs while increasing speed to door." });
}

/* Slide 8: Market Projections & System Assumptions */
{
  const s = pptx.addSlide();
  s.background = { color: BLUE_DEEP };
  chrome(s, "Slide 08 · Market Projections", 8, true);
  title(s, "Data-Smart Pipeline Projections: Minimum Viable Business Case", true);
  
  const stats = [["40,000", "Sample Target Families"], ["$85 / mo", "Average Basket Size"], ["$61.2M", "Pipeline Valuation"], ["500k+", "Macro Scaling Target"]];
  stats.forEach(([v, l], i) => {
    const x = 0.45 + i * 2.31;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 1.7, w: 2.11, h: 1.3, fill: { color: "1E426F" }, line: { color: "1E426F" }, rectRadius: 0.08 });
    s.addText(v, { x: x + 0.2, y: 1.85, w: 1.75, h: 0.55, fontFace: HEAD, fontSize: 24, bold: true, color: GOLD, margin: 0 });
    s.addText(l, { x: x + 0.2, y: 2.45, w: 1.75, h: 0.45, fontFace: BODY, fontSize: 10, color: "AEBED2", margin: 0 });
  });
  
  s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 3.2, w: 9.1, h: 1.8, fill: { color: RED }, line: { color: RED }, rectRadius: 0.1 });
  s.addText("MINIMUM VIABLE BUSINESS CASE", { x: 0.85, y: 3.45, w: 8.3, h: 0.3, fontFace: BODY, fontSize: 11, bold: true, charSpacing: 2, color: "F7CBD4" });
  s.addText("$61,200,000 ANNUAL PIPELINE", { x: 0.85, y: 3.8, w: 8.3, h: 0.6, fontFace: HEAD, fontSize: 32, bold: true, color: WHITE });
  s.addText("40,000 active cross-border and domestic families × $85/month average basket × 18 orders/year = $61.2 Million total transaction throughput migrated into a digital, tracked corporate retail pipeline.", { x: 0.85, y: 4.4, w: 8.3, h: 0.5, fontFace: BODY, fontSize: 11, color: "FBE3E8" });
}

/* Slide 9: Monetization Strategy: Recurring Software-as-a-Service */
{
  const s = pptx.addSlide();
  s.background = { color: PAPER };
  chrome(s, "Slide 09 · Monetization Strategy", 9);
  title(s, "Shifting From Transaction Margins to SaaS Stability");
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "Strategic Preference", accent: RED, body: "Prioritizes a Software-as-a-Service (SaaS) framework to secure predictable, monthly recurring income over standard hardware or code sales." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Lifecycle Visibility", accent: BLUE, body: "Secures long-term corporate enterprise value with commercial contract structures modeled on 5 to 10-year horizons (120 months)." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "Subscription Layers", accent: GOLD, body: "Implements multi-tier subscription options across the Logistics Network Access tier, Trader Optimization Tier, and Data Lake Intelligence Streams sold back to major FMCG manufacturers." });
}

/* Slide 10: Operational Roadmap & Phase 1 Sprints */
{
  const s = pptx.addSlide();
  s.background = { color: BLUE_DEEP };
  chrome(s, "Slide 10 · Operational Roadmap", 10, true);
  title(s, "Sprints to Deployment", true);
  
  const cw = 2.9, ch = 3.6;
  card(s, { x: 0.45, y: 1.6, w: cw, h: ch, heading: "Sprint 01: Executive Agreement", accent: GOLD, dark: true, body: "Secure alignment on the overarching agnostic marketplace architecture ('Takealot for the continent') to maximize ecosystem valuation and define commercial mandates." });
  card(s, { x: 0.45 + cw + 0.2, y: 1.6, w: cw, h: ch, heading: "Sprint 02: Field Mapping Sprints", accent: RED, dark: true, body: "Deploy field discovery groups to assess inventory capacity and merchant densification across target structured pilot hubs (e.g., Harare and Bulawayo)." });
  card(s, { x: 0.45 + 2 * (cw + 0.2), y: 1.6, w: cw, h: ch, heading: "Sprint 03: API Blueprinting", accent: WHITE, dark: true, body: "Define security parameters, token controls, and performance metrics for anchor corporate data integrations and multi-tenant access protocols." });
}

// Write generated presentation
fs.writeFileSync("/tmp/deck/TM-Pick-n-Pay-Express.raw.pptx", await pptx.write({ outputType: "nodebuffer" }));
console.log("Successfully created raw PPTX deck for 10 slides");
