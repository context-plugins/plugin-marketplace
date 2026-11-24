import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeWorkingStorageOutput = {
  gatewayArn?: string;
  /**
   * An array of the gateway's local disk IDs that are configured as working storage. Each local
   * disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local
   * disks are configured as working storage, then the DiskIds array is empty.
   */
  diskIds?: string[];
  /**
   * The total working storage in bytes in use by the gateway. If no working storage is configured
   * for the gateway, this field returns 0.
   */
  workingStorageUsedInBytes?: number;
  /**
   * The total working storage in bytes allocated for the gateway. If no working storage is
   * configured for the gateway, this field returns 0.
   */
  workingStorageAllocatedInBytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWorkingStorageOutputSchema: Schema<DescribeWorkingStorageOutput> =
  s.object<DescribeWorkingStorageOutput>(
    {
      gatewayArn: s.optional(s.string()),
      diskIds: s.optional(s.array(s.string())),
      workingStorageUsedInBytes: s.optional(s.int()),
      workingStorageAllocatedInBytes: s.optional(s.int()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        diskIds: "DiskIds",
        workingStorageUsedInBytes: "WorkingStorageUsedInBytes",
        workingStorageAllocatedInBytes: "WorkingStorageAllocatedInBytes",
      },
    },
    { additionalProperties: s.json() },
  );
