import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google's description of the product */
export type AboutTheProduct = {
  /** Prose blurb */
  description?: string;
  /** Feature bullets, when shown */
  features?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aboutTheProductSchema: Schema<AboutTheProduct> = s.object<AboutTheProduct>(
  {
    description: s.optional(s.string()),
    features: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
