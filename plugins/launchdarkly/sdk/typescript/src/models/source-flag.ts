import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SourceFlag = {
  /** The environment key for the source environment */
  key: string;
  /** The version of the source flag from which to copy */
  version?: number;
};

export const sourceFlagSchema: Schema<SourceFlag> = s.object<SourceFlag>({
  key: s.string(),
  version: s.optional(s.int()),
});
