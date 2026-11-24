import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateAcmeEndpointResponse = {
  /** The Amazon Resource Name (ARN) of the created ACME endpoint. */
  acmeEndpointArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeEndpointResponseSchema: Schema<CreateAcmeEndpointResponse> =
  s.object<CreateAcmeEndpointResponse>(
    {
      acmeEndpointArn: s.optional(s.string()),
      _keysMap: {
        acmeEndpointArn: "AcmeEndpointArn",
      },
    },
    { additionalProperties: s.json() },
  );
