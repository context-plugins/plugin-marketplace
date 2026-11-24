import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1ArchbeePublicApiReferenceApiSchema,
  type Status1ArchbeePublicApiReferenceApi,
} from "./status1-archbee-public-api-reference-api.js";

export type SyncApiReference400Error = {
  /** Response Status */
  status?: Status1ArchbeePublicApiReferenceApi;
  /** Array of messages */
  messages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncApiReference400ErrorSchema: Schema<SyncApiReference400Error> =
  s.object<SyncApiReference400Error>(
    {
      status: s.optional(s.lazy(() => status1ArchbeePublicApiReferenceApiSchema)),
      messages: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
