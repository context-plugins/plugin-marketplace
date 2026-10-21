import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Protocol to use when collecting metrics */
export const Protocol = {
  Http: "http",
  Https: "https",
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol] | (string & {});

export const protocolSchema: EnumSchema<Protocol> = s.enumOf<Protocol>(Protocol);
