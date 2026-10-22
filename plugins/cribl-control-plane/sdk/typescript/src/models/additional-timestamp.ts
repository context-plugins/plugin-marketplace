import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalTimestamp = {
  /** Regex with first capturing group matching the timestamp */
  regex: string;
  /** Select or enter strptime format for the captured timestamp */
  strptime: string;
};

export const additionalTimestampSchema: Schema<AdditionalTimestamp> = s.object<AdditionalTimestamp>({
  regex: s.string(),
  strptime: s.string(),
});
