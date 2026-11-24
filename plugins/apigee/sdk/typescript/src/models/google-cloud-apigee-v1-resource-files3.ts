import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ResourceFileSchema,
  type GoogleCloudApigeeV1ResourceFile,
} from "./google-cloud-apigee-v1-resource-file.js";

/** List of resource files included in the API proxy revision. */
export type GoogleCloudApigeeV1ResourceFiles3 = {
  /** List of resource files. */
  resourceFile?: GoogleCloudApigeeV1ResourceFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResourceFiles3Schema: Schema<GoogleCloudApigeeV1ResourceFiles3> =
  s.object<GoogleCloudApigeeV1ResourceFiles3>(
    {
      resourceFile: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResourceFileSchema))),
    },
    { additionalProperties: s.json() },
  );
