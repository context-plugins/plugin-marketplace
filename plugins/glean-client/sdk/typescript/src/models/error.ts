import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  message?: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  message: s.optional(s.string()),
});
