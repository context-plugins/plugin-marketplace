import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Capability = {
  View: "view",
  Comment: "comment",
} as const;
export type Capability = (typeof Capability)[keyof typeof Capability] | (string & {});

export const capabilitySchema: EnumSchema<Capability> = s.enumOf<Capability>(Capability);
