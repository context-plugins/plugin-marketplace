import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TapeArchive = {
  /** The Amazon Resource Name (ARN) of an archived virtual tape. */
  tapeArn?: string;
  /** The barcode that identifies the archived virtual tape. */
  tapeBarcode?: string;
  /** The date the virtual tape was created. */
  tapeCreatedDate?: Date;
  /** The size, in bytes, of the archived virtual tape. */
  tapeSizeInBytes?: number;
  /**
   * The time that the archiving of the virtual tape was completed. The default timestamp format is
   * in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
   */
  completionTime?: Date;
  /**
   * The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to.
   * The virtual tape is retrieved from the virtual tape shelf (VTS).
   */
  retrievedTo?: string;
  /** The current state of the archived virtual tape. */
  tapeStatus?: string;
  /**
   * The size, in bytes, of data stored on the virtual tape. This value is not available for tapes
   * created prior to May 13, 2015.
   */
  tapeUsedInBytes?: number;
  kmsKey?: string;
  /**
   * The ID of the pool that was used to archive the tape. The tapes in this pool are archived in
   * the S3 storage class that is associated with the pool.
   */
  poolId?: string;
  /** Set to true if the archived tape is stored as write-once-read-many (WORM). */
  worm?: boolean;
  /**
   * If the archived tape is subject to tape retention lock, the date that the archived tape started
   * being retained.
   */
  retentionStartDate?: Date;
  /**
   * The time that the tape entered the custom tape pool. The default timestamp format is in the
   * ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
   */
  poolEntryDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tapeArchiveSchema: Schema<TapeArchive> = s.object<TapeArchive>(
  {
    tapeArn: s.optional(s.string()),
    tapeBarcode: s.optional(s.string()),
    tapeCreatedDate: s.optional(s.dateTime()),
    tapeSizeInBytes: s.optional(s.int()),
    completionTime: s.optional(s.dateTime()),
    retrievedTo: s.optional(s.string()),
    tapeStatus: s.optional(s.string()),
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
      completionTime: "CompletionTime",
      retrievedTo: "RetrievedTo",
      tapeStatus: "TapeStatus",
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
