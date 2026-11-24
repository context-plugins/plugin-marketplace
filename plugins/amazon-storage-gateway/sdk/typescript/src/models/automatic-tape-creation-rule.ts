import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomaticTapeCreationRule = {
  /**
   * A prefix that you append to the barcode of the virtual tape that you are creating. This prefix
   * makes the barcode unique. The prefix must be 1-4 characters in length and must be one of the
   * uppercase letters from A to Z.
   */
  tapeBarcodePrefix: string;
  /**
   * The ID of the pool that you want to add your tape to for archiving. The tape in this pool is
   * archived in the Amazon S3 storage class that is associated with the pool. When you use your
   * backup application to eject the tape, the tape is archived directly into the storage class (S3
   * Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
   */
  poolId: string;
  /** The size, in bytes, of the virtual tape capacity. */
  tapeSizeInBytes: number;
  /**
   * The minimum number of available virtual tapes that the gateway maintains at all times. If the
   * number of tapes on the gateway goes below this value, the gateway creates as many new tapes as
   * are needed to have MinimumNumTapes on the gateway. For more information about automatic tape
   * creation, see Creating Tapes Automatically.
   */
  minimumNumTapes: number;
  /**
   * Set to true to indicate that tapes are to be archived as write-once-read-many (WORM). Set to
   * false when WORM is not enabled for tapes.
   */
  worm?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automaticTapeCreationRuleSchema: Schema<AutomaticTapeCreationRule> =
  s.object<AutomaticTapeCreationRule>(
    {
      tapeBarcodePrefix: s.string(),
      poolId: s.string(),
      tapeSizeInBytes: s.int(),
      minimumNumTapes: s.int(),
      worm: s.optional(s.boolean()),
      _keysMap: {
        tapeBarcodePrefix: "TapeBarcodePrefix",
        poolId: "PoolId",
        tapeSizeInBytes: "TapeSizeInBytes",
        minimumNumTapes: "MinimumNumTapes",
        worm: "Worm",
      },
    },
    { additionalProperties: s.json() },
  );
