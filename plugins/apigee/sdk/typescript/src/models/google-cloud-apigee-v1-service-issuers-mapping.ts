import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1ServiceIssuersMapping = {
  /** String indicating the Apigee service name. */
  service?: string;
  /** List of trusted issuer email ids. */
  emailIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ServiceIssuersMappingSchema: Schema<GoogleCloudApigeeV1ServiceIssuersMapping> =
  s.object<GoogleCloudApigeeV1ServiceIssuersMapping>(
    {
      service: s.optional(s.string()),
      emailIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
