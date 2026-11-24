import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1ArchbeePublicDocumentsApiSchema,
  type Data1ArchbeePublicDocumentsApi,
} from "./data1-archbee-public-documents-api.js";
import { status3Schema, type Status3 } from "./status3.js";

/** Process status */
export type DocResponse2 = {
  /** Response status. */
  status?: Status3;
  data?: Data1ArchbeePublicDocumentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docResponse2Schema: Schema<DocResponse2> = s.object<DocResponse2>(
  {
    status: s.optional(s.lazy(() => status3Schema)),
    data: s.optional(s.lazy(() => data1ArchbeePublicDocumentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
