import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { document2Schema, type Document2 } from "./document2.js";

export type ApiV2DocumentsResponse2 = {
  document: Document2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsResponse2Schema: Schema<ApiV2DocumentsResponse2> =
  s.object<ApiV2DocumentsResponse2>(
    {
      document: document2Schema,
    },
    { additionalProperties: s.json() },
  );
