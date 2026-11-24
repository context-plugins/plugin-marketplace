import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { document3Schema, type Document3 } from "./document3.js";

export type ApiV2DocumentsRequest = {
  document?: Document3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsRequestSchema: Schema<ApiV2DocumentsRequest> = s.object<ApiV2DocumentsRequest>(
  {
    document: s.optional(s.lazy(() => document3Schema)),
  },
  { additionalProperties: s.json() },
);
