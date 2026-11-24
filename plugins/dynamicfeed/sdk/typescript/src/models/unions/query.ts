import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** search a model name (e.g. llama, qwen, whisper), match CVE id / name / description */
export type Query = string;

export const querySchema: Schema<Query> = s.of<Query>(s.union([s.string()]));
