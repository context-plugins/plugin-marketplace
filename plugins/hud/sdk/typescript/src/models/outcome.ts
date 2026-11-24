import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Outcome = {
  Created: "created",
  Existing: "existing",
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome] | (string & {});

export const outcomeSchema: EnumSchema<Outcome> = s.enumOf<Outcome>(Outcome);
