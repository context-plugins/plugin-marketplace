import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeUploadBufferOutput = {
  gatewayArn?: string;
  /**
   * An array of the gateway's local disk IDs that are configured as working storage. Each local
   * disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local
   * disks are configured as working storage, then the DiskIds array is empty.
   */
  diskIds?: string[];
  /** The total number of bytes being used in the gateway's upload buffer. */
  uploadBufferUsedInBytes?: number;
  /** The total number of bytes allocated in the gateway's as upload buffer. */
  uploadBufferAllocatedInBytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeUploadBufferOutputSchema: Schema<DescribeUploadBufferOutput> =
  s.object<DescribeUploadBufferOutput>(
    {
      gatewayArn: s.optional(s.string()),
      diskIds: s.optional(s.array(s.string())),
      uploadBufferUsedInBytes: s.optional(s.int()),
      uploadBufferAllocatedInBytes: s.optional(s.int()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        diskIds: "DiskIds",
        uploadBufferUsedInBytes: "UploadBufferUsedInBytes",
        uploadBufferAllocatedInBytes: "UploadBufferAllocatedInBytes",
      },
    },
    { additionalProperties: s.json() },
  );
