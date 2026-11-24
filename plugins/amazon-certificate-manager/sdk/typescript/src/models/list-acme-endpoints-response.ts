import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmeEndpointSummarySchema, type AcmeEndpointSummary } from "./acme-endpoint-summary.js";

export type ListAcmeEndpointsResponse = {
  /** The list of ACME endpoints. */
  acmeEndpoints?: AcmeEndpointSummary[];
  /** A token for pagination. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeEndpointsResponseSchema: Schema<ListAcmeEndpointsResponse> =
  s.object<ListAcmeEndpointsResponse>(
    {
      acmeEndpoints: s.optional(s.array(s.lazy(() => acmeEndpointSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        acmeEndpoints: "AcmeEndpoints",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
