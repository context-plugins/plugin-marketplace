import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CertInfoSchema,
  type GoogleCloudApigeeV1CertInfo,
} from "./google-cloud-apigee-v1-cert-info.js";

/** Chain of certificates under this alias. */
export type GoogleCloudApigeeV1Certificate2 = {
  /** Chain of certificates under this name. */
  certInfo?: GoogleCloudApigeeV1CertInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1Certificate2Schema: Schema<GoogleCloudApigeeV1Certificate2> =
  s.object<GoogleCloudApigeeV1Certificate2>(
    {
      certInfo: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CertInfoSchema))),
    },
    { additionalProperties: s.json() },
  );
