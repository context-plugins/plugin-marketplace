import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RetrieveTapeRecoveryPointOutput = {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.
   */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrieveTapeRecoveryPointOutputSchema: Schema<RetrieveTapeRecoveryPointOutput> =
  s.object<RetrieveTapeRecoveryPointOutput>(
    {
      tapeArn: s.optional(s.string()),
      _keysMap: {
        tapeArn: "TapeARN",
      },
    },
    { additionalProperties: s.json() },
  );
