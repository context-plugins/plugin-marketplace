import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prevalidationOptionsSchema, type PrevalidationOptions } from "./prevalidation-options.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateAcmeDomainValidationRequest = {
  /** A unique, case-sensitive identifier to ensure idempotency of the request. */
  idempotencyToken?: string;
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn: string;
  /** The domain name to validate. */
  domainName: string;
  /** Exactly one member is set. */
  prevalidationOptions: PrevalidationOptions;
  /** One or more tags to associate with the domain validation. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeDomainValidationRequestSchema: Schema<CreateAcmeDomainValidationRequest> =
  s.object<CreateAcmeDomainValidationRequest>(
    {
      idempotencyToken: s.optional(s.string()),
      acmeEndpointArn: s.string(),
      domainName: s.string(),
      prevalidationOptions: prevalidationOptionsSchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        idempotencyToken: "IdempotencyToken",
        acmeEndpointArn: "AcmeEndpointArn",
        domainName: "DomainName",
        prevalidationOptions: "PrevalidationOptions",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
