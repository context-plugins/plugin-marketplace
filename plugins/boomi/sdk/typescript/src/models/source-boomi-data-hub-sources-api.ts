import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A data source that contributes records to the master data hub. */
export type SourceBoomiDataHubSourcesApi = {
  /** Unique identifier of the source. */
  id?: string;
  /** Display name of the source. */
  name?: string;
  /** Human-readable description of the source system. */
  description?: string;
  /** Timestamp when the source was created. */
  createdDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceBoomiDataHubSourcesApiSchema: Schema<SourceBoomiDataHubSourcesApi> =
  s.object<SourceBoomiDataHubSourcesApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      createdDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
