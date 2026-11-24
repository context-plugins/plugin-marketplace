import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type PoliciesResponse = {
  data: Data3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesResponseSchema: Schema<PoliciesResponse> = s.object<PoliciesResponse>(
  {
    data: data3Schema,
  },
  { additionalProperties: s.json() },
);
