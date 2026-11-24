import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttachVolumeInput = {
  /** The Amazon Resource Name (ARN) of the gateway that you want to attach the volume to. */
  gatewayArn: string;
  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix
   * for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of
   * arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume.
   * The target name must be unique across all volumes on a gateway. If you don't specify a value,
   * Storage Gateway uses the value that was previously used for this volume as the new target name.
   */
  targetName?: string;
  /** The Amazon Resource Name (ARN) of the volume to attach to the specified gateway. */
  volumeArn: string;
  /**
   * The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6
   * addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on
   * a gateway. Valid Values: A valid IP address.
   */
  networkInterfaceId: string;
  /**
   * The unique device ID or other distinguishing data that identifies the local disk used to create
   * the volume. This value is only required when you are attaching a stored volume.
   */
  diskId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachVolumeInputSchema: Schema<AttachVolumeInput> = s.object<AttachVolumeInput>(
  {
    gatewayArn: s.string(),
    targetName: s.optional(s.string()),
    volumeArn: s.string(),
    networkInterfaceId: s.string(),
    diskId: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      targetName: "TargetName",
      volumeArn: "VolumeARN",
      networkInterfaceId: "NetworkInterfaceId",
      diskId: "DiskId",
    },
  },
  { additionalProperties: s.json() },
);
