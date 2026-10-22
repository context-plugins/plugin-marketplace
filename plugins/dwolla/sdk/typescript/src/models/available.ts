import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Available = {
  value?: string;
  currency?: string;
};

export const availableSchema: Schema<Available> = s.object<Available>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
});
