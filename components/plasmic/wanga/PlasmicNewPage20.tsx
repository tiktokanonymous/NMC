// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pGUwLaFPdGtokmdZ3W7Ccj
// Component: w_K2t4zqgv
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
import sty from "./PlasmicNewPage20.module.css"; // plasmic-import: w_K2t4zqgv/css

export type PlasmicNewPage20__VariantMembers = {};

export type PlasmicNewPage20__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage20__VariantsArgs;
export const PlasmicNewPage20__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage20__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage20__ArgsType;
export const PlasmicNewPage20__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage20__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNewPage20Props {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicNewPage20__RenderFunc(props: {
  variants: PlasmicNewPage20__VariantsArgs;
  args: PlasmicNewPage20__ArgsType;
  overrides: PlasmicNewPage20__OverridesType;

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

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicNewPage20.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewPage20.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewPage20.pageMetadata.title}
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
              src: "/plasmic/wanga/images/_500388Page001Jpg.jpeg",
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
  PlasmicNewPage20__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage20__VariantsArgs;
    args?: PlasmicNewPage20__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage20__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage20__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNewPage20__ArgProps,
          internalVariantPropNames: PlasmicNewPage20__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewPage20__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage20";
  } else {
    func.displayName = `PlasmicNewPage20.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage20 = Object.assign(
  // Top-level PlasmicNewPage20 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicNewPage20
    internalVariantProps: PlasmicNewPage20__VariantProps,
    internalArgProps: PlasmicNewPage20__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "50038",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage20;
/* prettier-ignore-end */
