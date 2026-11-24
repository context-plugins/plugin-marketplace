import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapeArchiveInput = {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).
   */
  tapeArn: string;
  /**
   * Set to TRUE to delete an archived tape that belongs to a custom pool with tape retention lock.
   * Only archived tapes with tape retention lock set to governance can be deleted. Archived tapes
   * with tape retention lock set to compliance can't be deleted.
   */
  bypassGovernanceRetention?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapeArchiveInputSchema: Schema<DeleteTapeArchiveInput> = s.object<DeleteTapeArchiveInput>(
  {
    tapeArn: s.string(),
    bypassGovernanceRetention: s.optional(s.boolean()),
    _keysMap: {
      tapeArn: "TapeARN",
      bypassGovernanceRetention: "BypassGovernanceRetention",
    },
  },
  { additionalProperties: s.json() },
);
