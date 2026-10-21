import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When `group_by=model`, this field provides the model ID of the grouped usage result. For Model
 * APIs usage, this is the model ID. For Dedicated Endpoints usage, this is the endpoint ID.
 */
export type Model30 = string;

export const model30Schema: Schema<Model30> = s.of<Model30>(s.union([s.string()]));
