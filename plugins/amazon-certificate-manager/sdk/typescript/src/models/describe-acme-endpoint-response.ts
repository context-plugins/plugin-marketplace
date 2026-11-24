import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmeEndpointSchema, type AcmeEndpoint } from "./acme-endpoint.js";

export type DescribeAcmeEndpointResponse = {
  acmeEndpoint?: AcmeEndpoint;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeEndpointResponseSchema: Schema<DescribeAcmeEndpointResponse> =
  s.object<DescribeAcmeEndpointResponse>(
    {
      acmeEndpoint: s.optional(s.lazy(() => acmeEndpointSchema)),
      _keysMap: {
        acmeEndpoint: "AcmeEndpoint",
      },
    },
    { additionalProperties: s.json() },
  );
