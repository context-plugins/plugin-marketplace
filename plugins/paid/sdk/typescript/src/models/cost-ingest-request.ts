import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cost2Schema, type Cost2 } from "./unions/cost2.js";

export type CostIngestRequest = {
  costs: Cost2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costIngestRequestSchema: Schema<CostIngestRequest> = s.object<CostIngestRequest>(
  {
    costs: s.array(s.lazy(() => cost2Schema)),
  },
  { additionalProperties: s.json() },
);
