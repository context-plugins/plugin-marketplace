import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateCachediScsiVolumeInput = {
  gatewayArn: string;
  /** The size of the volume in bytes. */
  volumeSizeInBytes: number;
  /**
   * The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached volume.
   * Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise,
   * do not include this field. To list snapshots for your account use DescribeSnapshots in the
   * Amazon Elastic Compute Cloud API Reference.
   */
  snapshotId?: string;
  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix
   * for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of
   * arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume.
   * The target name must be unique across all volumes on a gateway. If you don't specify a value,
   * Storage Gateway uses the value that was previously used for this volume as the new target name.
   */
  targetName: string;
  /**
   * The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of
   * the specified existing volume's latest recovery point. The VolumeSizeInBytes value for this new
   * volume must be equal to or larger than the size of the existing volume, in bytes.
   */
  sourceVolumeArn?: string;
  /**
   * The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6
   * addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on
   * a gateway. Valid Values: A valid IP address.
   */
  networkInterfaceId: string;
  /**
   * A unique identifier that you use to retry a request. If you retry a request, use the same
   * ClientToken you specified in the initial request.
   */
  clientToken: string;
  /**
   * Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a
   * key managed by Amazon S3. Optional. Valid Values: true | false
   */
  kmsEncrypted?: boolean;
  /**
   * The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3
   * server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only
   * be set when KMSEncrypted is true. Optional.
   */
  kmsKey?: string;
  /**
   * A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value pair.
   * Valid characters for key and value are letters, spaces, and numbers that you can represent in
   * UTF-8 format, and the following special characters: + - = . _ : / \@. The maximum length of a
   * tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCachediScsiVolumeInputSchema: Schema<CreateCachediScsiVolumeInput> =
  s.object<CreateCachediScsiVolumeInput>(
    {
      gatewayArn: s.string(),
      volumeSizeInBytes: s.int(),
      snapshotId: s.optional(s.string()),
      targetName: s.string(),
      sourceVolumeArn: s.optional(s.string()),
      networkInterfaceId: s.string(),
      clientToken: s.string(),
      kmsEncrypted: s.optional(s.boolean()),
      kmsKey: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        gatewayArn: "GatewayARN",
        volumeSizeInBytes: "VolumeSizeInBytes",
        snapshotId: "SnapshotId",
        targetName: "TargetName",
        sourceVolumeArn: "SourceVolumeARN",
        networkInterfaceId: "NetworkInterfaceId",
        clientToken: "ClientToken",
        kmsEncrypted: "KMSEncrypted",
        kmsKey: "KMSKey",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
