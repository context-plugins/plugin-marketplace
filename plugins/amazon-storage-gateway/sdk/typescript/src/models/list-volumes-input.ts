import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVolumesInput = {
  gatewayArn?: string;
  /**
   * A string that indicates the position at which to begin the returned list of volumes. Obtain the
   * marker from the response of a previous List iSCSI Volumes request.
   */
  marker?: string;
  /** Specifies that the list of volumes returned be limited to the specified number of items. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVolumesInputSchema: Schema<ListVolumesInput> = s.object<ListVolumesInput>(
  {
    gatewayArn: s.optional(s.string()),
    marker: s.optional(s.string()),
    limit: s.optional(s.int()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      marker: "Marker",
      limit: "Limit",
    },
  },
  { additionalProperties: s.json() },
);
