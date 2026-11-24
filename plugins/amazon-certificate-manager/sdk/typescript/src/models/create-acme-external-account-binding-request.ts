import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { expirationSchema, type Expiration } from "./expiration.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateAcmeExternalAccountBindingRequest = {
  /** A unique, case-sensitive identifier to ensure idempotency of the request. */
  idempotencyToken?: string;
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding.
   */
  roleArn: string;
  expiration?: Expiration;
  /** One or more tags to associate with the external account binding. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeExternalAccountBindingRequestSchema: Schema<CreateAcmeExternalAccountBindingRequest> =
  s.object<CreateAcmeExternalAccountBindingRequest>(
    {
      idempotencyToken: s.optional(s.string()),
      acmeEndpointArn: s.string(),
      roleArn: s.string(),
      expiration: s.optional(s.lazy(() => expirationSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        idempotencyToken: "IdempotencyToken",
        acmeEndpointArn: "AcmeEndpointArn",
        roleArn: "RoleArn",
        expiration: "Expiration",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
