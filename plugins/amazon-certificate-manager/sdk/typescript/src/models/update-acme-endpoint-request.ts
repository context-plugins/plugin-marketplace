import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorizationBehavior2Schema, type AuthorizationBehavior2 } from "./authorization-behavior2.js";
import { certificateAuthoritySchema, type CertificateAuthority } from "./certificate-authority.js";
import { contact3Schema, type Contact3 } from "./contact3.js";

export type UpdateAcmeEndpointRequest = {
  /** The Amazon Resource Name (ARN) of the ACME endpoint to update. */
  acmeEndpointArn: string;
  /** The updated authorization behavior. */
  authorizationBehavior?: AuthorizationBehavior2;
  /** The updated contact requirement. */
  contact?: Contact3;
  /** Exactly one member is set. */
  certificateAuthority?: CertificateAuthority;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAcmeEndpointRequestSchema: Schema<UpdateAcmeEndpointRequest> =
  s.object<UpdateAcmeEndpointRequest>(
    {
      acmeEndpointArn: s.string(),
      authorizationBehavior: s.optional(s.lazy(() => authorizationBehavior2Schema)),
      contact: s.optional(s.lazy(() => contact3Schema)),
      certificateAuthority: s.optional(s.lazy(() => certificateAuthoritySchema)),
      _keysMap: {
        acmeEndpointArn: "AcmeEndpointArn",
        authorizationBehavior: "AuthorizationBehavior",
        contact: "Contact",
        certificateAuthority: "CertificateAuthority",
      },
    },
    { additionalProperties: s.json() },
  );
