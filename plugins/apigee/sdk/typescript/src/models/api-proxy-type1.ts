import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. API Proxy type supported by the environment. The type can be set when creating the
 * Environment and cannot be changed.
 */
export const ApiProxyType1 = {
  ApiProxyTypeUnspecified: "API_PROXY_TYPE_UNSPECIFIED",
  Programmable: "PROGRAMMABLE",
  Configurable: "CONFIGURABLE",
} as const;
export type ApiProxyType1 = (typeof ApiProxyType1)[keyof typeof ApiProxyType1] | (string & {});

export const apiProxyType1Schema: EnumSchema<ApiProxyType1> = s.enumOf<ApiProxyType1>(ApiProxyType1);
