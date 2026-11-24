import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcceptedEmailType = {
  Professional: "professional",
  Personal: "personal",
} as const;
export type AcceptedEmailType = (typeof AcceptedEmailType)[keyof typeof AcceptedEmailType] | (string & {});

export const acceptedEmailTypeSchema: EnumSchema<AcceptedEmailType> =
  s.enumOf<AcceptedEmailType>(AcceptedEmailType);
