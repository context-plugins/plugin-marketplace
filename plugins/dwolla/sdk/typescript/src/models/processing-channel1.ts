import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessingChannel1 = {
  destination?: string;
};

export const processingChannel1Schema: Schema<ProcessingChannel1> = s.object<ProcessingChannel1>({
  destination: s.optional(s.string()),
});
