import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name1Schema, type Name1 } from "./name1.js";

export type ToxicContent = {
  /** The name of the toxic content type. */
  name?: Name1;
  /**
   * Model confidence in the detected content type. Value range is zero to one, where one is highest
   * confidence.
   */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toxicContentSchema: Schema<ToxicContent> = s.object<ToxicContent>(
  {
    name: s.optional(s.lazy(() => name1Schema)),
    score: s.optional(s.float64()),
    _keysMap: {
      name: "Name",
      score: "Score",
    },
  },
  { additionalProperties: s.json() },
);
