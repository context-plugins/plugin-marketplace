import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcademicSession1 = {
  sourcedId: string;
};

export const academicSession1Schema: Schema<AcademicSession1> = s.object<AcademicSession1>({
  sourcedId: s.string(),
});
