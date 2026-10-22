import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error2 = {
  code: string;
  message: string;
  path: string;
};

export const error2Schema: Schema<Error2> = s.object<Error2>({
  code: s.string(),
  message: s.string(),
  path: s.string(),
});
