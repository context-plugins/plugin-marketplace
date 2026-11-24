import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lookupSchema, type Lookup } from "./lookup.js";

export type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse = {
  attributes?: Record<string, unknown>[];
  nextPageToken?: string;
  lookup?: Lookup;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationAttributesAvailableResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse>(
    {
      attributes: s.optional(s.array(s.record(s.string(), s.unknown()))),
      nextPageToken: s.optional(s.string()),
      lookup: s.optional(s.lazy(() => lookupSchema)),
    },
    { additionalProperties: s.json() },
  );
