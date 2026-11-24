import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter by org/author (e.g. meta-llama, deepseek-ai) */
export type Org = string;

export const orgSchema: Schema<Org> = s.of<Org>(s.union([s.string()]));
