import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. The Adaptive MT file that was imported. */
export type AdaptiveMtFile2 = {
  /** Output only. Timestamp when this file was created. */
  createTime?: string;
  /** Output only. Timestamp when this file was last updated. */
  updateTime?: string;
  /** The file's display name. */
  displayName?: string;
  /**
   * Identifier. The resource name of the file, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`
   */
  name?: string;
  /** The number of entries that the file contains. */
  entryCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtFile2Schema: Schema<AdaptiveMtFile2> = s.object<AdaptiveMtFile2>(
  {
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    entryCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
