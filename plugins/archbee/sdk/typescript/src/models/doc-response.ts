import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataArchbeePublicDocumentsApiSchema,
  type DataArchbeePublicDocumentsApi,
} from "./data-archbee-public-documents-api.js";
import { statusSchema, type Status } from "./status.js";

/** Delete status */
export type DocResponse = {
  /** Response Status */
  status?: Status;
  data?: DataArchbeePublicDocumentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docResponseSchema: Schema<DocResponse> = s.object<DocResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => dataArchbeePublicDocumentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
