import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalRegex = {
  /** Regex to test against */
  regex: string;
};

export const additionalRegexSchema: Schema<AdditionalRegex> = s.object<AdditionalRegex>({
  regex: s.string(),
});
