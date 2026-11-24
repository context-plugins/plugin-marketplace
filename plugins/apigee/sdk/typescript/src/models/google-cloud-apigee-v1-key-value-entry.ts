import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Key value map pair where the value represents the data associated with the corresponding key.
 * **Note**: Supported for Apigee hybrid 1.8.x and higher.
 */
export type GoogleCloudApigeeV1KeyValueEntry = {
  /** Required. Data or payload that is being retrieved and associated with the unique key. */
  value?: string;
  /** Resource URI that can be used to identify the scope of the key value map entries. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeyValueEntrySchema: Schema<GoogleCloudApigeeV1KeyValueEntry> =
  s.object<GoogleCloudApigeeV1KeyValueEntry>(
    {
      value: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
