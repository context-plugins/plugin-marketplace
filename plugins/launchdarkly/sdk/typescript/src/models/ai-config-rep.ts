import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigRep = {
  /** The key of the AI Config */
  key: string;
  /** The name of the AI Config */
  name: string;
};

export const aiConfigRepSchema: Schema<AiConfigRep> = s.object<AiConfigRep>({
  key: s.string(),
  name: s.string(),
});
