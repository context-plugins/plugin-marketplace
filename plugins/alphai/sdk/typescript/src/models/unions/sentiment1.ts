import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Sentiment1 = string;

export const sentiment1Schema: Schema<Sentiment1> = s.of<Sentiment1>(s.union([s.string()]));
