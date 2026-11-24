import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CertInfoSchema,
  type GoogleCloudApigeeV1CertInfo,
} from "./google-cloud-apigee-v1-cert-info.js";

export type GoogleCloudApigeeV1Certificate = {
  /** Chain of certificates under this name. */
  certInfo?: GoogleCloudApigeeV1CertInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CertificateSchema: Schema<GoogleCloudApigeeV1Certificate> =
  s.object<GoogleCloudApigeeV1Certificate>(
    {
      certInfo: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CertInfoSchema))),
    },
    { additionalProperties: s.json() },
  );
