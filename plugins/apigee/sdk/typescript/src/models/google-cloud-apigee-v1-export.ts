import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details of an export job. */
export type GoogleCloudApigeeV1Export = {
  /** Output only. Time the export job was created. */
  created?: string;
  /** Output only. Error is set when export fails */
  error?: string;
  /** Output only. Time the export job was last updated. */
  updated?: string;
  /** Display name of the export job. */
  name?: string;
  /**
   * Output only. Self link of the export job. A URI that can be used to retrieve the status of an
   * export job. Example:
   * `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
   */
  self?: string;
  /** Description of the export job. */
  description?: string;
  /**
   * Output only. Execution time for this export job. If the job is still in progress, it will be
   * set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to
   * (`updated` - `created`), in seconds.
   */
  executionTime?: string;
  /**
   * Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`,
   * and `failed`.
   */
  state?: string;
  /** Name of the datastore that is the destination of the export job [datastore] */
  datastoreName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ExportSchema: Schema<GoogleCloudApigeeV1Export> =
  s.object<GoogleCloudApigeeV1Export>(
    {
      created: s.optional(s.string()),
      error: s.optional(s.string()),
      updated: s.optional(s.string()),
      name: s.optional(s.string()),
      self: s.optional(s.string()),
      description: s.optional(s.string()),
      executionTime: s.optional(s.string()),
      state: s.optional(s.string()),
      datastoreName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
