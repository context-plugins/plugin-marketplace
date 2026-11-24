import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MinMatchProb = string;

export const minMatchProbSchema: Schema<MinMatchProb> = s.of<MinMatchProb>(s.union([s.string()]));
