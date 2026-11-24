import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1ArchbeePublicApiReferenceApiSchema,
  type Status1ArchbeePublicApiReferenceApi,
} from "./status1-archbee-public-api-reference-api.js";

export type DocsSearch400Error = {
  /** Response Status */
  status?: Status1ArchbeePublicApiReferenceApi;
  /** Array of messages */
  messages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSearch400ErrorSchema: Schema<DocsSearch400Error> = s.object<DocsSearch400Error>(
  {
    status: s.optional(s.lazy(() => status1ArchbeePublicApiReferenceApiSchema)),
    messages: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
