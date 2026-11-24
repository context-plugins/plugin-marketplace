import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata about a resource file. */
export type GoogleCloudApigeeV1ResourceFile = {
  /** Resource file type. {{ resource_file_type }} */
  type?: string;
  /** ID of the resource file. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResourceFileSchema: Schema<GoogleCloudApigeeV1ResourceFile> =
  s.object<GoogleCloudApigeeV1ResourceFile>(
    {
      type: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
