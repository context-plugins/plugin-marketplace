import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TapeInfo = {
  /** The Amazon Resource Name (ARN) of a virtual tape. */
  tapeArn?: string;
  /** The barcode that identifies a specific virtual tape. */
  tapeBarcode?: string;
  /** The size, in bytes, of a virtual tape. */
  tapeSizeInBytes?: number;
  /** The status of the tape. */
  tapeStatus?: string;
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list
   * of gateways for your account and Amazon Web Services Region.
   */
  gatewayArn?: string;
  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is
   * archived in the S3 storage class that is associated with the pool. When you use your backup
   * application to eject the tape, the tape is archived directly into the storage class (S3 Glacier
   * or S3 Glacier Deep Archive) that corresponds to the pool.
   */
  poolId?: string;
  /** The date that the tape became subject to tape retention lock. */
  retentionStartDate?: Date;
  /** The date that the tape entered the custom tape pool with tape retention lock enabled. */
  poolEntryDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tapeInfoSchema: Schema<TapeInfo> = s.object<TapeInfo>(
  {
    tapeArn: s.optional(s.string()),
    tapeBarcode: s.optional(s.string()),
    tapeSizeInBytes: s.optional(s.int()),
    tapeStatus: s.optional(s.string()),
    gatewayArn: s.optional(s.string()),
    poolId: s.optional(s.string()),
    retentionStartDate: s.optional(s.dateTime()),
    poolEntryDate: s.optional(s.dateTime()),
    _keysMap: {
      tapeArn: "TapeARN",
      tapeBarcode: "TapeBarcode",
      tapeSizeInBytes: "TapeSizeInBytes",
      tapeStatus: "TapeStatus",
      gatewayArn: "GatewayARN",
      poolId: "PoolId",
      retentionStartDate: "RetentionStartDate",
      poolEntryDate: "PoolEntryDate",
    },
  },
  { additionalProperties: s.json() },
);
