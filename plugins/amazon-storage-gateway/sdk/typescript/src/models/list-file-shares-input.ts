import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListFileSharesInput = {
  /**
   * The Amazon Resource Name (ARN) of the gateway whose file shares you want to list. If this field
   * is not present, all file shares under your account are listed.
   */
  gatewayArn?: string;
  /**
   * The maximum number of file shares to return in the response. The value must be an integer with
   * a value greater than zero. Optional.
   */
  limit?: number;
  /**
   * Opaque pagination token returned from a previous ListFileShares operation. If present, Marker
   * specifies where to continue the list from after a previous call to ListFileShares. Optional.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFileSharesInputSchema: Schema<ListFileSharesInput> = s.object<ListFileSharesInput>(
  {
    gatewayArn: s.optional(s.string()),
    limit: s.optional(s.int()),
    marker: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      limit: "Limit",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);
