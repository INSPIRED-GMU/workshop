
export default function Intro() {
  return (
    <div className="App">
        <div class="hero min-h-screen bg-base-200"  style={{backgroundImage:`url(https://images.unsplash.com/photo-1516670428252-df97bba108d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80)`,backgroundBlendMode:'soft-light'}}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div>
        {/* <div class="badge">Co-located with VL/HCC</div> */}
      <h1 class="text-5xl font-bold">Social & Behavioral Theory in Technical Research (HumanTech)</h1>
      <p class="py-6">This workshop will provide an opportunity for both researchers already integrating human-centric theory into their work and researchers interested in doing so to engage with one another on the successes and opportunities across the tech spectrum. Only through this visible community of researchers centering technology on humanity through theory-driven research and solutions can we start to see more efforts that make use of the wealth of human-centric, non-technical theories in technical research. </p>
      {/* <button class="btn btn-neutral">Register</button> */}
    </div>
  </div>
</div>

    </div>
  );
}

