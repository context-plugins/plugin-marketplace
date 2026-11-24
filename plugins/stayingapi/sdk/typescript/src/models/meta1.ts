import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditsChargedSchema, type CreditsCharged } from "./credits-charged.js";
import { platformSchema, type Platform } from "./platform.js";

export type Meta1 = {
  requestId?: string;
  creditsCharged?: CreditsCharged;
  platforms?: Platform[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>(
  {
    requestId: s.optional(s.string()),
    creditsCharged: s.optional(s.lazy(() => creditsChargedSchema)),
    platforms: s.optional(s.array(s.lazy(() => platformSchema))),
  },
  { additionalProperties: s.json() },
);
