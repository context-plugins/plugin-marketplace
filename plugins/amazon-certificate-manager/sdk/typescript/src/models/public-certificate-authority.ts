import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedKeyAlgorithmSchema, type AllowedKeyAlgorithm } from "./allowed-key-algorithm.js";

export type PublicCertificateAuthority = {
  /** The key algorithms allowed for certificates issued by this certificate authority. */
  allowedKeyAlgorithms?: AllowedKeyAlgorithm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicCertificateAuthoritySchema: Schema<PublicCertificateAuthority> =
  s.object<PublicCertificateAuthority>(
    {
      allowedKeyAlgorithms: s.optional(s.array(s.lazy(() => allowedKeyAlgorithmSchema))),
      _keysMap: {
        allowedKeyAlgorithms: "AllowedKeyAlgorithms",
      },
    },
    { additionalProperties: s.json() },
  );
