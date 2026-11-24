import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteAcmeEndpointRequest = {
  /** The Amazon Resource Name (ARN) of the ACME endpoint to delete. */
  acmeEndpointArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteAcmeEndpointRequestSchema: Schema<DeleteAcmeEndpointRequest> =
  s.object<DeleteAcmeEndpointRequest>(
    {
      acmeEndpointArn: s.string(),
      _keysMap: {
        acmeEndpointArn: "AcmeEndpointArn",
      },
    },
    { additionalProperties: s.json() },
  );
