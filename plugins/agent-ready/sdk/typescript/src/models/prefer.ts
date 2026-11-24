import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";
import { modeSchema, type Mode } from "./mode.js";

export type Prefer = {
  streaming?: boolean;
  format?: Format;
  mode?: Mode;
  language?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const preferSchema: Schema<Prefer> = s.object<Prefer>(
  {
    streaming: s.optional(s.boolean()),
    format: s.optional(s.lazy(() => formatSchema)),
    mode: s.optional(s.lazy(() => modeSchema)),
    language: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
