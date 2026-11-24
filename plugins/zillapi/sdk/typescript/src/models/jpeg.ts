import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Jpeg = {
  url?: string;
  width?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jpegSchema: Schema<Jpeg> = s.object<Jpeg>(
  {
    url: s.optional(s.string()),
    width: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
