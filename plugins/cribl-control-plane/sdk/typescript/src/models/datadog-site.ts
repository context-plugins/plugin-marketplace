import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Datadog site to which events should be sent */
export const DatadogSite = {
  Us: "us",
  Us3: "us3",
  Us5: "us5",
  Eu: "eu",
  Fed1: "fed1",
  Ap1: "ap1",
  Custom: "custom",
} as const;
export type DatadogSite = (typeof DatadogSite)[keyof typeof DatadogSite] | (string & {});

export const datadogSiteSchema: EnumSchema<DatadogSite> = s.enumOf<DatadogSite>(DatadogSite);
