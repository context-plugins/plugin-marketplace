import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateOptionsAwsCertificateManagerOperationsApiSchema,
  type CertificateOptionsAwsCertificateManagerOperationsApi,
} from "./certificate-options-aws-certificate-manager-operations-api.js";

export type UpdateCertificateOptionsRequest = {
  /**
   * ARN of the requested certificate to update. This must be of the form:
   * arn:aws:acm:us-east-1:account:certificate/12345678-1234-1234-1234-123456789012
   */
  certificateArn: string;
  options: CertificateOptionsAwsCertificateManagerOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCertificateOptionsRequestSchema: Schema<UpdateCertificateOptionsRequest> =
  s.object<UpdateCertificateOptionsRequest>(
    {
      certificateArn: s.string(),
      options: certificateOptionsAwsCertificateManagerOperationsApiSchema,
      _keysMap: {
        certificateArn: "CertificateArn",
        options: "Options",
      },
    },
    { additionalProperties: s.json() },
  );
