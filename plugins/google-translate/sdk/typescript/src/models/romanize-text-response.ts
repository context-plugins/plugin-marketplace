import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { romanizationSchema, type Romanization } from "./romanization.js";

/** The response message for synchronous romanization. */
export type RomanizeTextResponse = {
  /** Text romanization responses. This field has the same length as `contents`. */
  romanizations?: Romanization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const romanizeTextResponseSchema: Schema<RomanizeTextResponse> = s.object<RomanizeTextResponse>(
  {
    romanizations: s.optional(s.array(s.lazy(() => romanizationSchema))),
  },
  { additionalProperties: s.json() },
);
