import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ToolStatusParameter = {
  /** The name of the tool's function parameter. */
  name: string;
  /** The value of the tool's function parameter. */
  value: string;
};

export const toolStatusParameterSchema: Schema<ToolStatusParameter> = s.object<ToolStatusParameter>({
  name: s.string(),
  value: s.string(),
});
