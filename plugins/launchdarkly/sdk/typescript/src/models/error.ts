import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error = {
  message: string;
  code: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  message: s.string(),
  code: s.string(),
});
