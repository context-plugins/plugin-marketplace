import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deliverySchema, type Delivery } from "./delivery.js";

export type MaxJobAccepted = {
  jobId: string;
  status: string;
  keyword?: string;
  maxPages?: number;
  delivery?: Delivery;
  resultsUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const maxJobAcceptedSchema: Schema<MaxJobAccepted> = s.object<MaxJobAccepted>(
  {
    jobId: s.string(),
    status: s.string(),
    keyword: s.optional(s.string()),
    maxPages: s.optional(s.int()),
    delivery: s.optional(s.lazy(() => deliverySchema)),
    resultsUrl: s.string(),
  },
  { additionalProperties: s.json() },
);
