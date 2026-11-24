import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Registration trunks are TLS-only. */
export const Transport = {
  Tls: "tls",
} as const;
export type Transport = (typeof Transport)[keyof typeof Transport] | (string & {});

export const transportSchema: EnumSchema<Transport> = s.enumOf<Transport>(Transport);
