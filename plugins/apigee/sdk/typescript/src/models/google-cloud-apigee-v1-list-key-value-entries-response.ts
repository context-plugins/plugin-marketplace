import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1KeyValueEntrySchema,
  type GoogleCloudApigeeV1KeyValueEntry,
} from "./google-cloud-apigee-v1-key-value-entry.js";

/** The request structure for listing key value map keys and its corresponding values. */
export type GoogleCloudApigeeV1ListKeyValueEntriesResponse = {
  /** One or more key value map keys and values. */
  keyValueEntries?: GoogleCloudApigeeV1KeyValueEntry[];
  /**
   * Token that can be sent as `next_page_token` to retrieve the next page. If this field is
   * omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListKeyValueEntriesResponseSchema: Schema<GoogleCloudApigeeV1ListKeyValueEntriesResponse> =
  s.object<GoogleCloudApigeeV1ListKeyValueEntriesResponse>(
    {
      keyValueEntries: s.optional(s.array(s.lazy(() => googleCloudApigeeV1KeyValueEntrySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
