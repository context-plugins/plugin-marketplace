import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolOptionsSchema, type ToolOptions } from "../tool-options.js";

/**
 * The options for the tool. Ie allows to propagate the tool result to the caller via
 * propagate_tool_result flag.
 */
export type Options = ToolOptions;

export const optionsSchema: Schema<Options> = s.of<Options>(s.union([s.lazy(() => toolOptionsSchema)]));
