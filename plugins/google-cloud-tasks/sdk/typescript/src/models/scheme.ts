import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or
 * HTTPS).
 */
export const Scheme = {
  SchemeUnspecified: "SCHEME_UNSPECIFIED",
  Http: "HTTP",
  Https: "HTTPS",
} as const;
export type Scheme = (typeof Scheme)[keyof typeof Scheme] | (string & {});

export const schemeSchema: EnumSchema<Scheme> = s.enumOf<Scheme>(Scheme);
