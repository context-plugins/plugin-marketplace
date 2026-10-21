import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolSchema, type Tool } from "../tool.js";

/**
 * A list of tools the model may call. Use this to provide a list of functions the model may
 * generate JSON inputs for.
 *
 * **When `tools` is specified, `min_tokens` and `response_format` fields are unsupported.**
 */
export type Tools = Tool[];

export const toolsSchema: Schema<Tools> = s.of<Tools>(s.union([s.array(s.lazy(() => toolSchema))]));
