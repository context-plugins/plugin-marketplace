import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

export type EntitiesRemoveResponse = {
  data?: Data1;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitiesRemoveResponseSchema: Schema<EntitiesRemoveResponse> = s.object<EntitiesRemoveResponse>(
  {
    data: s.optional(s.lazy(() => data1Schema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
