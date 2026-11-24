import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InspectionDataResponse = {
  /** The protocol used to return the HTTP response. */
  protocol?: string;
  /** The HTTP response status code for the HTTP response. */
  statusCode?: string;
  /** The message associated with the HTTP status code. */
  statusMessage?: string;
  /** The response headers associated with the HTTP response. */
  headers?: string;
  /** The HTTP response returned. */
  body?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectionDataResponseSchema: Schema<InspectionDataResponse> = s.object<InspectionDataResponse>(
  {
    protocol: s.optional(s.string()),
    statusCode: s.optional(s.string()),
    statusMessage: s.optional(s.string()),
    headers: s.optional(s.string()),
    body: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
