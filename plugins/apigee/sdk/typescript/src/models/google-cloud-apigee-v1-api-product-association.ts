import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** APIProductAssociation has the API product and its administrative state association. */
export type GoogleCloudApigeeV1ApiProductAssociation = {
  /** The API product credential associated status. Valid values are `approved` or `revoked`. */
  status?: string;
  /** API product to be associated with the credential. */
  apiproduct?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiProductAssociationSchema: Schema<GoogleCloudApigeeV1ApiProductAssociation> =
  s.object<GoogleCloudApigeeV1ApiProductAssociation>(
    {
      status: s.optional(s.string()),
      apiproduct: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
