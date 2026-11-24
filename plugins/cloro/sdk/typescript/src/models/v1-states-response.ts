import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1StatesResponse = {
  /** USPS two-letter state code */
  code: string;
  /** Full state name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1StatesResponseSchema: Schema<V1StatesResponse> = s.object<V1StatesResponse>(
  {
    code: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
