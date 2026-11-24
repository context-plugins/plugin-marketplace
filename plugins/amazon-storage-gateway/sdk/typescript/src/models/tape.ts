import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tape = {
  /** The Amazon Resource Name (ARN) of the virtual tape. */
  tapeArn?: string;
  /** The barcode that identifies a specific virtual tape. */
  tapeBarcode?: string;
  /** The date the virtual tape was created. */
  tapeCreatedDate?: Date;
  /** The size, in bytes, of the virtual tape capacity. */
  tapeSizeInBytes?: number;
  /** The current state of the virtual tape. */
  tapeStatus?: string;
  /** The virtual tape library (VTL) device that the virtual tape is associated with. */
  vtlDevice?: string;
  /**
   * For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is
   * complete. Range: 0 (not started) to 100 (complete).
   */
  progress?: number;
  /**
   * The size, in bytes, of data stored on the virtual tape. This value is not available for tapes
   * created prior to May 13, 2015.
   */
  tapeUsedInBytes?: number;
  kmsKey?: string;
  /**
   * The ID of the pool that contains tapes that will be archived. The tapes in this pool are
   * archived in the S3 storage class that is associated with the pool. When you use your backup
   * application to eject the tape, the tape is archived directly into the storage class (S3 Glacier
   * or S3 Glacier Deep Archive) that corresponds to the pool.
   */
  poolId?: string;
  /** If the tape is archived as write-once-read-many (WORM), this value is true. */
  worm?: boolean;
  /** The date that the tape is first archived with tape retention lock enabled. */
  retentionStartDate?: Date;
  /** The date that the tape enters a custom tape pool. */
  poolEntryDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tapeSchema: Schema<Tape> = s.object<Tape>(
  {
    tapeArn: s.optional(s.string()),
    tapeBarcode: s.optional(s.string()),
    tapeCreatedDate: s.optional(s.dateTime()),
    tapeSizeInBytes: s.optional(s.int()),
    tapeStatus: s.optional(s.string()),
    vtlDevice: s.optional(s.string()),
    progress: s.optional(s.float64()),
    tapeUsedInBytes: s.optional(s.int()),
    kmsKey: s.optional(s.string()),
    poolId: s.optional(s.string()),
    worm: s.optional(s.boolean()),
    retentionStartDate: s.optional(s.dateTime()),
    poolEntryDate: s.optional(s.dateTime()),
    _keysMap: {
      tapeArn: "TapeARN",
      tapeBarcode: "TapeBarcode",
      tapeCreatedDate: "TapeCreatedDate",
      tapeSizeInBytes: "TapeSizeInBytes",
      tapeStatus: "TapeStatus",
      vtlDevice: "VTLDevice",
      progress: "Progress",
      tapeUsedInBytes: "TapeUsedInBytes",
      kmsKey: "KMSKey",
      poolId: "PoolId",
      worm: "Worm",
      retentionStartDate: "RetentionStartDate",
      poolEntryDate: "PoolEntryDate",
    },
  },
  { additionalProperties: s.json() },
);
