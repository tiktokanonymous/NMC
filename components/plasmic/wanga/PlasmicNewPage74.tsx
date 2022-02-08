// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: t8W5xMkYw8
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_wanga.module.css"; // plasmic-import: pGUwLaFPdGtokmdZ3W7Ccj/projectcss
import sty from "./PlasmicNewPage74.module.css"; // plasmic-import: t8W5xMkYw8/css

export type PlasmicNewPage74__VariantMembers = {};

export type PlasmicNewPage74__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage74__VariantsArgs;
export const PlasmicNewPage74__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage74__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage74__ArgsType;
export const PlasmicNewPage74__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage74__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNewPage74Props {}

function PlasmicNewPage74__RenderFunc(props: {
  variants: PlasmicNewPage74__VariantsArgs;
  args: PlasmicNewPage74__ArgsType;
  overrides: PlasmicNewPage74__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"499671"}</title>
        <meta key="og:title" property="og:title" content={"499671"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            sty.root
          )}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"545px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"323px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/wanga/images/_499671Page001Jpg.jpeg",
              fullWidth: 2480,
              fullHeight: 3508,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage74__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage74__VariantsArgs;
    args?: PlasmicNewPage74__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage74__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage74__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNewPage74__ArgProps,
      internalVariantPropNames: PlasmicNewPage74__VariantProps
    });

    return PlasmicNewPage74__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage74";
  } else {
    func.displayName = `PlasmicNewPage74.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage74 = Object.assign(
  // Top-level PlasmicNewPage74 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage74
    internalVariantProps: PlasmicNewPage74__VariantProps,
    internalArgProps: PlasmicNewPage74__ArgProps
  }
);

export default PlasmicNewPage74;
/* prettier-ignore-end */
