import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RouterType = {
  /** The vendor for the virtual interface's router. */
  vendor?: string;
  /** The virtual interface router platform. */
  platform?: string;
  /** The router software. */
  software?: string;
  /** The template for the virtual interface's router. */
  xsltTemplateName?: string;
  /** The MAC Security (MACsec) template for the virtual interface's router. */
  xsltTemplateNameForMacSec?: string;
  /**
   * Identifies the router by a combination of vendor, platform, and software version. For example,
   * CiscoSystemsInc-2900SeriesRouters-IOS124.
   */
  routerTypeIdentifier?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routerTypeSchema: Schema<RouterType> = s.object<RouterType>(
  {
    vendor: s.optional(s.string()),
    platform: s.optional(s.string()),
    software: s.optional(s.string()),
    xsltTemplateName: s.optional(s.string()),
    xsltTemplateNameForMacSec: s.optional(s.string()),
    routerTypeIdentifier: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
