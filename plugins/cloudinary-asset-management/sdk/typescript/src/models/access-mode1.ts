import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The access mode of the asset. Null when not explicitly set. */
export const AccessMode1 = {
  Public: "public",
  Authenticated: "authenticated",
} as const;
export type AccessMode1 = (typeof AccessMode1)[keyof typeof AccessMode1] | (string & {});

export const accessMode1Schema: EnumSchema<AccessMode1> = s.enumOf<AccessMode1>(AccessMode1);
