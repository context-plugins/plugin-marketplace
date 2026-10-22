import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { staticToolParameterSchema, type StaticToolParameter } from "../static-tool-parameter.js";

/**
 * Parameters for the tool whose values should be set at config time (i.e., not provided by the
 * LLM).
 */
export type StaticParameters = StaticToolParameter[];

export const staticParametersSchema: Schema<StaticParameters> = s.of<StaticParameters>(
  s.union([s.array(s.lazy(() => staticToolParameterSchema))]),
);
