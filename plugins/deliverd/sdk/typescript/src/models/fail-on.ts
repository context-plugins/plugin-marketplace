import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What counts as failing, for CI: rejected_allowed (default), loosened, changed or never */
export const FailOn = {
  Never: "never",
  RejectedAllowed: "rejected_allowed",
  Loosened: "loosened",
  Changed: "changed",
} as const;
export type FailOn = (typeof FailOn)[keyof typeof FailOn] | (string & {});

export const failOnSchema: EnumSchema<FailOn> = s.enumOf<FailOn>(FailOn);
