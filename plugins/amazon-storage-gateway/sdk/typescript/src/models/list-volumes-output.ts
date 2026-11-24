import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { volumeInfoSchema, type VolumeInfo } from "./volume-info.js";

export type ListVolumesOutput = {
  gatewayArn?: string;
  /**
   * Use the marker in your next request to continue pagination of iSCSI volumes. If there are no
   * more volumes to list, this field does not appear in the response body.
   */
  marker?: string;
  /**
   * An array of VolumeInfo objects, where each object describes an iSCSI volume. If no volumes are
   * defined for the gateway, then VolumeInfos is an empty array "[]".
   */
  volumeInfos?: VolumeInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVolumesOutputSchema: Schema<ListVolumesOutput> = s.object<ListVolumesOutput>(
  {
    gatewayArn: s.optional(s.string()),
    marker: s.optional(s.string()),
    volumeInfos: s.optional(s.array(s.lazy(() => volumeInfoSchema))),
    _keysMap: {
      gatewayArn: "GatewayARN",
      marker: "Marker",
      volumeInfos: "VolumeInfos",
    },
  },
  { additionalProperties: s.json() },
);
