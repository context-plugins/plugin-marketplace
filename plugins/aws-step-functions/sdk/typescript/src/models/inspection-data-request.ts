import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InspectionDataRequest = {
  /** The protocol used to make the HTTP request. */
  protocol?: string;
  /** The HTTP method used for the HTTP request. */
  method?: string;
  /** The API endpoint used for the HTTP request. */
  url?: string;
  /** The request headers associated with the HTTP request. */
  headers?: string;
  /** The request body for the HTTP request. */
  body?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectionDataRequestSchema: Schema<InspectionDataRequest> = s.object<InspectionDataRequest>(
  {
    protocol: s.optional(s.string()),
    method: s.optional(s.string()),
    url: s.optional(s.string()),
    headers: s.optional(s.string()),
    body: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
