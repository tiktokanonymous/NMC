// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: vpf4FrZTmW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import sty from "./PlasmicNewPage847.module.css"; // plasmic-import: vpf4FrZTmW/css

export type PlasmicNewPage847__VariantMembers = {};

export type PlasmicNewPage847__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage847__VariantsArgs;
export const PlasmicNewPage847__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage847__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage847__ArgsType;
export const PlasmicNewPage847__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage847__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNewPage847Props {}

function PlasmicNewPage847__RenderFunc(props: {
  variants: PlasmicNewPage847__VariantsArgs;
  args: PlasmicNewPage847__ArgsType;
  overrides: PlasmicNewPage847__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicNewPage847.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewPage847.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewPage847.pageMetadata.title}
        />
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
            projectcss.plasmic_mixins,
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
              src: "/plasmic/wanga/images/_500440Page0011Jpg.jpeg",
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
  PlasmicNewPage847__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage847__VariantsArgs;
    args?: PlasmicNewPage847__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage847__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage847__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage847__ArgProps,
          internalVariantPropNames: PlasmicNewPage847__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewPage847__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage847";
  } else {
    func.displayName = `PlasmicNewPage847.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage847 = Object.assign(
  // Top-level PlasmicNewPage847 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage847
    internalVariantProps: PlasmicNewPage847__VariantProps,
    internalArgProps: PlasmicNewPage847__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "500440",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage847;
/* prettier-ignore-end */
