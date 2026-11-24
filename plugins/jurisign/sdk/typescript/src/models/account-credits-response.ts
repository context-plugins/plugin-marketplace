import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type AccountCreditsResponse = {
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountCreditsResponseSchema: Schema<AccountCreditsResponse> = s.object<AccountCreditsResponse>(
  {
    data: s.optional(s.lazy(() => dataSchema)),
  },
  { additionalProperties: s.json() },
);
