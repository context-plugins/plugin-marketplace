import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListFileSystemAssociationsInput = {
  gatewayArn?: string;
  /**
   * The maximum number of file system associations to return in the response. If present, Limit
   * must be an integer with a value greater than zero. Optional.
   */
  limit?: number;
  /**
   * Opaque pagination token returned from a previous ListFileSystemAssociations operation. If
   * present, Marker specifies where to continue the list from after a previous call to
   * ListFileSystemAssociations. Optional.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFileSystemAssociationsInputSchema: Schema<ListFileSystemAssociationsInput> =
  s.object<ListFileSystemAssociationsInput>(
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
