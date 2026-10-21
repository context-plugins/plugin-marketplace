import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ToolStatusError = {
  /** The type of error encountered during the tool's execution. */
  type: string;
  /** The message of error. */
  msg: string;
};

export const toolStatusErrorSchema: Schema<ToolStatusError> = s.object<ToolStatusError>({
  type: s.string(),
  msg: s.string(),
});
