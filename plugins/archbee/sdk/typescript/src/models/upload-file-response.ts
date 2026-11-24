import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataArchbeePublicFileManagerApiSchema,
  type DataArchbeePublicFileManagerApi,
} from "./data-archbee-public-file-manager-api.js";
import { statusSchema, type Status } from "./status.js";

/** Upload OK status */
export type UploadFileResponse = {
  /** Response Status */
  status?: Status;
  data?: DataArchbeePublicFileManagerApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const uploadFileResponseSchema: Schema<UploadFileResponse> = s.object<UploadFileResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => dataArchbeePublicFileManagerApiSchema)),
  },
  { additionalProperties: s.json() },
);
