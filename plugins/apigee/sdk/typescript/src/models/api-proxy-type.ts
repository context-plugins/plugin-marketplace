import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the API proxy. */
export const ApiProxyType = {
  ApiProxyTypeUnspecified: "API_PROXY_TYPE_UNSPECIFIED",
  Programmable: "PROGRAMMABLE",
  Configurable: "CONFIGURABLE",
} as const;
export type ApiProxyType = (typeof ApiProxyType)[keyof typeof ApiProxyType] | (string & {});

export const apiProxyTypeSchema: EnumSchema<ApiProxyType> = s.enumOf<ApiProxyType>(ApiProxyType);
