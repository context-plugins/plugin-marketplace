import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Student = {
  sourcedId: string;
};

export const studentSchema: Schema<Student> = s.object<Student>({
  sourcedId: s.string(),
});
