import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ExportSchema,
  type GoogleCloudApigeeV1Export,
} from "./google-cloud-apigee-v1-export.js";

/** The response for ListExports */
export type GoogleCloudApigeeV1ListExportsResponse = {
  /** Details of the export jobs. */
  exports?: GoogleCloudApigeeV1Export[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListExportsResponseSchema: Schema<GoogleCloudApigeeV1ListExportsResponse> =
  s.object<GoogleCloudApigeeV1ListExportsResponse>(
    {
      exports: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ExportSchema))),
    },
    { additionalProperties: s.json() },
  );
