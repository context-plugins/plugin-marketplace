import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Who its output reaches, furthest first */
export const ExternalReach = {
  Internal: "internal",
  Customer: "customer",
  Public: "public",
  Regulator: "regulator",
} as const;
export type ExternalReach = (typeof ExternalReach)[keyof typeof ExternalReach] | (string & {});

export const externalReachSchema: EnumSchema<ExternalReach> = s.enumOf<ExternalReach>(ExternalReach);
