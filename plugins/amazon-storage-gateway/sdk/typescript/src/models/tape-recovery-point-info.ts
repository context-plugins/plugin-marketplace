import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TapeRecoveryPointInfo = {
  /** The Amazon Resource Name (ARN) of the virtual tape. */
  tapeArn?: string;
  /**
   * The time when the point-in-time view of the virtual tape was replicated for later recovery. The
   * default timestamp format of the tape recovery point time is in the ISO8601 extended
   * YYYY-MM-DD'T'HH:MM:SS'Z' format.
   */
  tapeRecoveryPointTime?: Date;
  /** The size, in bytes, of the virtual tapes to recover. */
  tapeSizeInBytes?: number;
  /** The status of the virtual tapes. */
  tapeStatus?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tapeRecoveryPointInfoSchema: Schema<TapeRecoveryPointInfo> = s.object<TapeRecoveryPointInfo>(
  {
    tapeArn: s.optional(s.string()),
    tapeRecoveryPointTime: s.optional(s.dateTime()),
    tapeSizeInBytes: s.optional(s.int()),
    tapeStatus: s.optional(s.string()),
    _keysMap: {
      tapeArn: "TapeARN",
      tapeRecoveryPointTime: "TapeRecoveryPointTime",
      tapeSizeInBytes: "TapeSizeInBytes",
      tapeStatus: "TapeStatus",
    },
  },
  { additionalProperties: s.json() },
);
