import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListAcmeAccountsRequest = {
  /** A token for pagination. */
  nextToken?: string;
  /** The maximum number of results to return. */
  maxResults?: number;
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeAccountsRequestSchema: Schema<ListAcmeAccountsRequest> =
  s.object<ListAcmeAccountsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      acmeEndpointArn: s.string(),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
        acmeEndpointArn: "AcmeEndpointArn",
      },
    },
    { additionalProperties: s.json() },
  );
