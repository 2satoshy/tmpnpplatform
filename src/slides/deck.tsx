import type React from "react";
import { Body, Card, SlideBase, SlideChrome } from "@/components/slide-kit";

const homePageImage = "/HomePageImage.png";
const logoRect = "/tm-pick n pay logo rectangle.jpg";

/* ------------------------------------------------------------------ */
/* Slide 1: Cover Page & The Agnostic Vision                          */
/* ------------------------------------------------------------------ */
function Slide1_Cover() {
  return (
    <SlideBase tone="blue">
      <img
        src={homePageImage}
        alt="Agnostic Marketplace Infrastructure"
        referrerPolicy="no-referrer"
        width={1600}
        height={1000}
        className="absolute right-0 top-0 h-full w-[950px] object-cover opacity-30 blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pnp-blue-deep via-pnp-blue-deep/90 to-pnp-blue-deep/50" />
      
      <div className="absolute left-[96px] top-[70px] rounded-2xl bg-white px-6 py-4 shadow-lg z-10">
        <img src={logoRect} alt="TM Pick n Pay" referrerPolicy="no-referrer" className="h-[52px] w-auto max-w-[300px] object-contain" />
      </div>

      <div className="absolute left-[96px] top-[190px] right-[96px] z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-pnp-gold/20 border border-pnp-gold/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-pnp-gold">
          STRATEGIC PROPOSAL: NEXT-GENERATION AGNOSTIC MARKETPLACE
        </div>
        <h1 className="slide-title-lg mt-4 text-white font-extrabold leading-[1.08]">
          The Agnostic Marketplace &amp; Last-Mile Infrastructure Platform
        </h1>
        <p className="slide-subtitle mt-3 text-white/85 max-w-[1600px] leading-relaxed">
          Unifying Retail Networks, Diaspora Shoppers, and Informal Traders Through Open Digital Architecture
        </p>

        <div className="mt-5 h-[6px] w-[180px] rounded-full bg-pnp-red" />

        <div className="mt-5 rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur-md w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-pnp-gold block mb-2">Strategic Positioning</span>
          <p className="slide-body text-white/95 leading-relaxed text-xl">
            An open-architecture, multi-tenant marketplace framework with TM Pick n Pay uniquely positioned as the primary anchor retail tenant and wholesale backbone driving the entire shared consumer ecosystem.
          </p>
        </div>

        <p className="slide-body mt-4 text-white/60 text-sm">
          Prepared for: The Executive Leadership Team, TM Pick n Pay &nbsp;·&nbsp; Core Strategy: Open Marketplace Framework from Inception
        </p>
      </div>

      <div className="slide-footer absolute bottom-[35px] left-[96px] text-white/45 text-xs z-10">
        Confidential · Strategic Executive Proposal
      </div>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 2: Strategic Context & System Boundaries                     */
/* ------------------------------------------------------------------ */
function Slide2_Context() {
  return (
    <SlideBase>
      <SlideChrome kicker="Slide 02 · Strategic Context & System Boundaries" index={2} />
      <Body>
        <h2 className="slide-title text-pnp-blue">
          Independent Strategic Outlook &amp; Framework Boundaries
        </h2>
        <p className="slide-body mt-3 text-pnp-muted">
          Establishing the strategic perimeter, external macro perspective, and physical anchor foundation.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-8 h-[520px]">
          <Card title="Independent Analysis" accent="blue">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-blue block mb-3">External Macro Framework</span>
            Formulated as an external macro-market framework with a limited understanding of internal, proprietary initiatives. Operates as an objective strategic lens on market opportunity.
          </Card>

          <Card title="Strategic Repositioning" accent="red">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-red block mb-3">Agile Optimization Engine</span>
            Designed as an agile mechanism to optimize physical retail distribution, sales, and marketing — driving volume throughput across existing corporate assets.
          </Card>

          <Card title="Anchor Infrastructure" accent="blue">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-blue block mb-3">Physical Grid Activation</span>
            Explicitly leverages established physical retail networks in key structured cities as anchor infrastructure through which optimization and last-mile logistics are executed.
          </Card>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 3: The Macro Reality: Navigating the "Abnormal P&L"           */
/* ------------------------------------------------------------------ */
function Slide3_MacroReality() {
  return (
    <SlideBase tone="blue">
      <SlideChrome kicker="Slide 03 · The Macro Reality" index={3} tone="blue" />
      <Body>
        <h2 className="slide-title text-white">
          Operating and Structuring within an Informal Economy
        </h2>
        <p className="slide-body mt-3 text-white/75">
          Navigating structural economic shifts through digital adaptability rather than rigid balance sheet defense.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-8 h-[520px]">
          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-gold" />
              <h3 className="slide-subtitle text-white">The Landscape Reality</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                The economy has become highly informalized. While specific geographies remain structured enough for brick-and-mortar stores, traditional retail models face severe constraints.
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-semibold text-pnp-gold">
              Structural Shift: Decoupling from pure physical footfall
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-red" />
              <h3 className="slide-subtitle text-white">The Financial Shift</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                Evaluating financial structures based on historical &ldquo;normalcy&rdquo; is impossible; the market presents an abnormal P&amp;L environment that demands non-traditional revenue capture models.
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-semibold text-white/90">
              Abnormal P&amp;L: Requires dynamic margin architecture
            </div>
          </div>

          <div className="rounded-3xl bg-pnp-red p-9 flex flex-col justify-between shadow-lg">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-white" />
              <h3 className="slide-subtitle text-white">The Strategic Pivot</h3>
              <p className="slide-body mt-4 text-white/95 leading-relaxed">
                Instead of protecting a rigid, static balance sheet, corporate strategy must pivot off traditional normalcy to invest in operational adaptability. These digital infrastructure investments transform operational expenses directly into catalysts for sustainability.
              </p>
            </div>
            <div className="rounded-2xl bg-white/20 p-4 text-xs font-bold text-white">
              Catalyst for Sustainability: OpEx converted to growth engine
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 4: Core Value Proposition: The Three Pillars                 */
/* ------------------------------------------------------------------ */
function Slide4_ValueProp() {
  return (
    <SlideBase>
      <SlideChrome kicker="Slide 04 · Core Value Proposition" index={4} />
      <Body>
        <h2 className="slide-title text-pnp-blue">
          Closing the Systemic Retail Gap
        </h2>
        <div className="mt-4 rounded-2xl bg-pnp-blue/5 border border-pnp-blue/15 px-6 py-4">
          <p className="slide-body text-pnp-blue font-semibold">
            <strong>Three-Way Integration:</strong> The value proposition relies on closing a massive distribution gap by seamlessly integrating three distinct market vectors:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 h-[450px]">
          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-red/10 text-pnp-red px-4 py-1 text-xs font-bold uppercase tracking-wider">Pillar 01</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Customer Closeness</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Re-establishing direct customer connection (<strong>&ldquo;Know Your Customer&rdquo;</strong>). Building end-to-end digital visibility into household preferences, frequency, and spending triggers.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Direct Consumer Relationship &amp; Data Ownership
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-blue/10 text-pnp-blue px-4 py-1 text-xs font-bold uppercase tracking-wider">Pillar 02</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Informal Market Participation</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Formally participating in the decentralized, high-volume informal retail traders market — converting tuck shops and informal vendors into wholesale extension nodes.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Wholesale Supply &amp; Decentralized Distribution
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-gold/30 text-pnp-ink px-4 py-1 text-xs font-bold uppercase tracking-wider">Pillar 03</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Cross-Border Volumes</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Capturing the massive corridor of people outside the country who actively fund and assist their families back home, routing foreign capital into direct local retail settlement.
              </p>
            </div>
            <div className="mt-6 rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Diaspora Remittance &amp; Grocery Pipeline
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 5: Platform Foundation: Intelligence Commerce                */
/* ------------------------------------------------------------------ */
function Slide5_PlatformFoundation() {
  return (
    <SlideBase tone="blue">
      <SlideChrome kicker="Slide 05 · Platform Foundation" index={5} tone="blue" />
      <Body>
        <h2 className="slide-title text-white">
          The Catalyst for Profitability, Sustainability, and Adaptability
        </h2>
        <p className="slide-body mt-3 text-white/75">
          Underpinned by an intelligent commerce architecture that transforms data tracking into an unassailable moat.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 h-[500px]">
          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-red" />
              <h3 className="slide-subtitle text-white">The Core Moat</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                In an informalized economy, not knowing, not following, or not incentivizing your customer is the single greatest risk—making active customer data tracking the ultimate competitive differentiator.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-red/30 p-4 border border-pnp-red/40 text-xs font-bold text-white">
              Data Tracking = Ultimate Moat
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-gold" />
              <h3 className="slide-subtitle text-white">Ecosystem Architecture</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                The entire marketplace ecosystem is underpinned by a robust corporate data lake and AI-driven Intelligent Commerce — enabling predictive demand forecasting and dynamic pricing.
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-bold text-pnp-gold">
              Corporate Data Lake &amp; AI Engine
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-white" />
              <h3 className="slide-subtitle text-white">The Strategic Outcome</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                Data intelligence acts as the direct operational engine that secures predictable, sustainable corporate margins and enables continuous adaptability to shifting consumer trends.
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-bold text-white">
              Predictable Margins &amp; Long-Term Growth
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 6: Platform Design: Open API & Multi-Tenancy                 */
/* ------------------------------------------------------------------ */
function Slide6_PlatformDesign() {
  return (
    <SlideBase>
      <SlideChrome kicker="Slide 06 · Platform Design" index={6} />
      <Body>
        <h2 className="slide-title text-pnp-blue">
          Multi-Tenant Architecture vs. Application Silos
        </h2>
        <p className="slide-body mt-3 text-pnp-muted">
          Open digital infrastructure designed to scale market transactions without single-retailer limitations.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 h-[500px]">
          <Card title="Agnostic Inception" accent="red">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-red block mb-3">Open-Ended Design</span>
            Built from day one as an open-ended, multi-tenant marketplace framework, explicitly rejecting single-retailer application restrictions and siloed architectures.
          </Card>

          <Card title="Open Connectivity" accent="blue">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-blue block mb-3">Seamless Integration</span>
            Accessible to any vetted external retailer, boutique vendor, or third-party logistics provider via secure, high-throughput API integrations.
          </Card>

          <Card title="Enterprise Segregation" accent="red">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-red block mb-3">White-Labeled Security</span>
            Drives massive market transaction volumes across the grid while preserving the capacity for anchor enterprise tenants to partition secure, white-labeled private spaces.
          </Card>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 7: Distribution Strategy: Informal Network Extension          */
/* ------------------------------------------------------------------ */
function Slide7_Distribution() {
  return (
    <SlideBase>
      <SlideChrome kicker="Slide 07 · Distribution Strategy" index={7} />
      <Body>
        <h2 className="slide-title text-pnp-blue">
          Decentralized Footprint Expansion Without Capital Expense
        </h2>
        <p className="slide-body mt-3 text-pnp-muted">
          Extending physical coverage into township and rural communities by turning informal traders into logistics nodes.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 h-[500px]">
          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-red" />
              <h3 className="slide-subtitle text-pnp-blue">Corporate as Distributor</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Repositions the anchor retailer to step in as the primary bulk wholesale distributor to independent informal retail networks, capturing previously unreachable transaction volumes.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Primary Wholesale Supplier to Informal Trade
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-blue" />
              <h3 className="slide-subtitle text-pnp-blue">Gray Market Displacement</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Displaces un-policed cross-border gray trading, unmanaged tax leakage, and counterfeit products by feeding verified, high-quality corporate inventory straight into local communities.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Legitimizing &amp; Cleaning Up Supply Chains
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <div className="mb-4 h-[6px] w-[60px] rounded-full bg-pnp-gold" />
              <h3 className="slide-subtitle text-pnp-blue">Logistical Moats</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Integrates affiliated informal local traders as decentralized localized distribution and collection nodes, bypassing brick-and-mortar expansion costs while increasing speed to door.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Decentralized Nodes Without Brick-and-Mortar CapEx
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 8: Market Projections & System Assumptions                    */
/* ------------------------------------------------------------------ */
function Slide8_MarketProjections() {
  return (
    <SlideBase tone="blue">
      <SlideChrome kicker="Slide 08 · Market Projections & System Assumptions" index={8} tone="blue" />
      <Body>
        <h2 className="slide-title text-white">
          Data-Smart Pipeline Projections: Minimum Viable Business Case
        </h2>
        <p className="slide-body mt-3 text-white/75">
          Quantifying the initial target corridor footprint and long-term diaspora scaling capacity.
        </p>

        <div className="mt-10 grid grid-cols-4 gap-8">
          <div className="rounded-3xl bg-white/10 border border-white/15 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-gold block">Sample Size</span>
            <div className="text-[52px] font-extrabold text-white mt-2 leading-none">40,000</div>
            <p className="slide-caption mt-4 text-white/70">
              Active cross-border and domestic families modeled in the baseline target sample.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-gold block">Average Basket</span>
            <div className="text-[52px] font-extrabold text-white mt-2 leading-none">$85</div>
            <p className="slide-caption mt-4 text-white/70">
              Calculated family basket expenditure footprint averaging $85 per month.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-gold block">Pipeline Valuation</span>
            <div className="text-[52px] font-extrabold text-pnp-gold mt-2 leading-none">$61.2M</div>
            <p className="slide-caption mt-4 text-white/70">
              Pipeline valuation moat consolidating core remittance and local buying assumptions.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pnp-gold block">Macro Scaling</span>
            <div className="text-[42px] font-extrabold text-white mt-2 leading-none">500k+</div>
            <p className="slide-caption mt-4 text-white/70">
              Target diaspora population pool ranging between 100,000 and 500,000+ participants.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between rounded-3xl bg-pnp-red p-10 shadow-lg">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Minimum Viable Business Case Summary
            </span>
            <div className="mt-2 text-[48px] font-extrabold text-white leading-none">$61,200,000 Annual Pipeline</div>
          </div>
          <div className="max-w-[550px] text-white/90 text-sm leading-relaxed">
            40,000 families × $85/month × 18 orders/yr = $61.2M gross transaction throughput migrated into a digital, tracked, corporate retail ecosystem with multi-tier monetization layers.
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 9: Monetization Strategy: Recurring Software-as-a-Service    */
/* ------------------------------------------------------------------ */
function Slide9_Monetization() {
  return (
    <SlideBase>
      <SlideChrome kicker="Slide 09 · Monetization Strategy" index={9} />
      <Body>
        <h2 className="slide-title text-pnp-blue">
          Shifting From Transaction Margins to SaaS Stability
        </h2>
        <p className="slide-body mt-3 text-pnp-muted">
          Establishing multi-tier recurring revenue streams to secure long-term enterprise valuation.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 h-[500px]">
          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-red/10 text-pnp-red px-4 py-1 text-xs font-bold uppercase tracking-wider">Strategy 01</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Strategic Preference</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Prioritizes a Software-as-a-Service (SaaS) framework to secure predictable, monthly recurring income over standard hardware or code sales.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Predictable Recurring SaaS Revenue
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-blue/10 text-pnp-blue px-4 py-1 text-xs font-bold uppercase tracking-wider">Strategy 02</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Lifecycle Visibility</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Secures long-term corporate enterprise value with commercial contract structures modeled on <strong>5 to 10-year horizons (120 months)</strong>.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              5–10 Year Commercial Horizons
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-pnp-line bg-white p-9 shadow-sm">
            <div>
              <span className="rounded-full bg-pnp-gold/30 text-pnp-ink px-4 py-1 text-xs font-bold uppercase tracking-wider">Strategy 03</span>
              <h3 className="slide-subtitle mt-4 text-pnp-blue">Subscription Layers</h3>
              <p className="slide-body mt-4 text-pnp-muted leading-relaxed">
                Implements multi-tier subscription options across the <strong>Logistics Network Access tier</strong>, <strong>Trader Optimization Tier</strong>, and <strong>Data Lake Intelligence Streams</strong> sold back to FMCG manufacturers.
              </p>
            </div>
            <div className="rounded-2xl bg-pnp-paper p-4 text-xs font-bold text-pnp-ink">
              Multi-Tier B2B &amp; FMCG Subscriptions
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* ------------------------------------------------------------------ */
/* Slide 10: Operational Roadmap & Phase 1 Sprints                    */
/* ------------------------------------------------------------------ */
function Slide10_Roadmap() {
  return (
    <SlideBase tone="blue">
      <SlideChrome kicker="Slide 10 · Operational Roadmap" index={10} tone="blue" />
      <Body>
        <h2 className="slide-title text-white">
          Sprints to Deployment
        </h2>
        <p className="slide-body mt-3 text-white/75">
          Structured deployment execution from executive alignment to field mapping and API integration.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 h-[500px]">
          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="inline-block rounded-full bg-pnp-gold px-4 py-1 text-xs font-bold text-pnp-ink uppercase tracking-wider mb-4">
                Sprint 01
              </div>
              <h3 className="slide-subtitle text-white">Executive Agreement</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                Secure alignment on the overarching agnostic marketplace architecture (<strong>&ldquo;Takealot for the continent&rdquo;</strong>) to maximize ecosystem valuation and define commercial mandates.
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-bold text-pnp-gold">
              Strategic Architectural Alignment
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/15 p-9 flex flex-col justify-between">
            <div>
              <div className="inline-block rounded-full bg-pnp-red px-4 py-1 text-xs font-bold text-white uppercase tracking-wider mb-4">
                Sprint 02
              </div>
              <h3 className="slide-subtitle text-white">Field Mapping Sprints</h3>
              <p className="slide-body mt-4 text-white/80 leading-relaxed">
                Deploy field discovery groups to assess inventory capacity and merchant densification across target structured pilot hubs (e.g., Harare and Bulawayo).
              </p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4 border border-white/10 text-xs font-bold text-white">
              Harare &amp; Bulawayo Merchant Hubs
            </div>
          </div>

          <div className="rounded-3xl bg-pnp-red p-9 flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold text-pnp-red uppercase tracking-wider mb-4">
                Sprint 03
              </div>
              <h3 className="slide-subtitle text-white">API Blueprinting</h3>
              <p className="slide-body mt-4 text-white/95 leading-relaxed">
                Define security parameters, token controls, and performance metrics for anchor corporate data integrations and multi-tenant access protocols.
              </p>
            </div>
            <div className="rounded-2xl bg-white/20 p-4 text-xs font-bold text-white">
              Secure Corporate Integration Blueprint
            </div>
          </div>
        </div>
      </Body>
    </SlideBase>
  );
}

/* Exported slides list matching exact 10-slide specification */
export const slides: { id: string; title: string; Component: () => React.ReactElement }[] = [
  { id: "slide-1", title: "Cover Page & Agnostic Vision", Component: Slide1_Cover },
  { id: "slide-2", title: "Strategic Context & System Boundaries", Component: Slide2_Context },
  { id: "slide-3", title: "The Macro Reality", Component: Slide3_MacroReality },
  { id: "slide-4", title: "Core Value Proposition", Component: Slide4_ValueProp },
  { id: "slide-5", title: "Platform Foundation: Intelligence Commerce", Component: Slide5_PlatformFoundation },
  { id: "slide-6", title: "Platform Design: Open API & Multi-Tenancy", Component: Slide6_PlatformDesign },
  { id: "slide-7", title: "Distribution Strategy", Component: Slide7_Distribution },
  { id: "slide-8", title: "Market Projections & System Assumptions", Component: Slide8_MarketProjections },
  { id: "slide-9", title: "Monetization Strategy (SaaS)", Component: Slide9_Monetization },
  { id: "slide-10", title: "Operational Roadmap & Sprints", Component: Slide10_Roadmap },
];
