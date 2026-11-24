import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of plan */
export const PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType = {
  Flat: "flat",
  Usage: "usage",
  Credit: "credit",
} as const;
export type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType =
  | (typeof PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType)[keyof typeof PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType]
  | (string & {});

export const plansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeSchema: EnumSchema<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType> =
  s.enumOf<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType>(
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType,
  );
