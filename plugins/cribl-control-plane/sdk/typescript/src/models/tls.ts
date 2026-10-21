import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to inherit TLS configs from group setting or disable TLS */
export const Tls = {
  Inherit: "inherit",
  Off: "off",
} as const;
export type Tls = (typeof Tls)[keyof typeof Tls] | (string & {});

export const tlsSchema: EnumSchema<Tls> = s.enumOf<Tls>(Tls);
