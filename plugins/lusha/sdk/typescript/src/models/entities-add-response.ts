import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

export type EntitiesAddResponse = {
  data?: Data2;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitiesAddResponseSchema: Schema<EntitiesAddResponse> = s.object<EntitiesAddResponse>(
  {
    data: s.optional(s.lazy(() => data2Schema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
