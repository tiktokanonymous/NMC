// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/wanga/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { UnnamedGlobalGroupOfVariants2Context } from "../components/plasmic/wanga/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants2";
import { PlasmicNewPage518 } from "../components/plasmic/wanga/PlasmicNewPage518";

function NewPage518() {
  // Use PlasmicNewPage518 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicNewPage518 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicNewPage518 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <UnnamedGlobalGroupOfVariants2Context.Provider value={undefined}>
      <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
        <PlasmicNewPage518 />
      </UnnamedGlobalGroupOfVariantsContext.Provider>
    </UnnamedGlobalGroupOfVariants2Context.Provider>
  );
}

export default NewPage518;
