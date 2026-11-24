import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImageHolder = {
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageHolderSchema: Schema<ImageHolder> = s.object<ImageHolder>(
  {
    url: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
