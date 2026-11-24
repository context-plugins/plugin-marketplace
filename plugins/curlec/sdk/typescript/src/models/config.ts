import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { displaySchema, type Display } from "./display.js";

/** Advanced checkout display configuration (blocks, sequence, preferences). */
export type Config = {
  display?: Display;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configSchema: Schema<Config> = s.object<Config>(
  {
    display: s.optional(s.lazy(() => displaySchema)),
  },
  { additionalProperties: s.json() },
);
