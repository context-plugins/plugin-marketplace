import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { toxicContentSchema, type ToxicContent } from "./toxic-content.js";

export type ToxicLabels = {
  /** Array of toxic content types identified in the string. */
  labels?: ToxicContent[];
  /**
   * Overall toxicity score for the string. Value range is zero to one, where one is the highest
   * confidence.
   */
  toxicity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toxicLabelsSchema: Schema<ToxicLabels> = s.object<ToxicLabels>(
  {
    labels: s.optional(s.array(s.lazy(() => toxicContentSchema))),
    toxicity: s.optional(s.float64()),
    _keysMap: {
      labels: "Labels",
      toxicity: "Toxicity",
    },
  },
  { additionalProperties: s.json() },
);
