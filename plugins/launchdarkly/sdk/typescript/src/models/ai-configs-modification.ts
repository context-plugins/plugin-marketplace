import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsModification = {
  date?: Date;
};

export const aiConfigsModificationSchema: Schema<AiConfigsModification> = s.object<AiConfigsModification>({
  date: s.optional(s.dateTime()),
});
