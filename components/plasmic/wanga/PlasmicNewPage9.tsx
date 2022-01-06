// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: 4dWwUF2vRV
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

import * as projectcss from "./plasmic_wanga.module.css"; // plasmic-import: pGUwLaFPdGtokmdZ3W7Ccj/projectcss
import * as sty from "./PlasmicNewPage9.module.css"; // plasmic-import: 4dWwUF2vRV/css

export type PlasmicNewPage9__VariantMembers = {};

export type PlasmicNewPage9__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage9__VariantsArgs;
export const PlasmicNewPage9__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage9__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage9__ArgsType;
export const PlasmicNewPage9__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage9__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNewPage9Props {
  dataFetches: PlasmicNewPage9__Fetches;
}

function PlasmicNewPage9__RenderFunc(props: {
  variants: PlasmicNewPage9__VariantsArgs;
  args: PlasmicNewPage9__ArgsType;
  overrides: PlasmicNewPage9__OverridesType;
  dataFetches?: PlasmicNewPage9__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"499996"}</title>
        <meta key="og:title" property="og:title" content={"499996"} />
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
            displayWidth={"324px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/wanga/images/_499996Page001Jpg.jpeg",
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
  PlasmicNewPage9__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage9__VariantsArgs;
    args?: PlasmicNewPage9__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNewPage9__Fetches;
  } & Omit<PlasmicNewPage9__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage9__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewPage9__ArgProps,
      internalVariantPropNames: PlasmicNewPage9__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNewPage9__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage9";
  } else {
    func.displayName = `PlasmicNewPage9.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage9 = Object.assign(
  // Top-level PlasmicNewPage9 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage9
    internalVariantProps: PlasmicNewPage9__VariantProps,
    internalArgProps: PlasmicNewPage9__ArgProps
  }
);

export default PlasmicNewPage9;
/* prettier-ignore-end */
