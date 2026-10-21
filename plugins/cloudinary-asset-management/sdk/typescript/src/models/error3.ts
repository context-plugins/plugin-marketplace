import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error3 = {
  message: string;
};

export const error3Schema: Schema<Error3> = s.object<Error3>({
  message: s.string(),
});
