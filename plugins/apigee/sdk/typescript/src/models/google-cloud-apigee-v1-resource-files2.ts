import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ResourceFileSchema,
  type GoogleCloudApigeeV1ResourceFile,
} from "./google-cloud-apigee-v1-resource-file.js";

/** The resource files included in this shared flow revision. */
export type GoogleCloudApigeeV1ResourceFiles2 = {
  /** List of resource files. */
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResourceFiles2Schema: Schema<GoogleCloudApigeeV1ResourceFiles2> =
  s.object<GoogleCloudApigeeV1ResourceFiles2>(
    {
      resourceFile: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResourceFileSchema))),
    },
    { additionalProperties: s.json() },
  );
