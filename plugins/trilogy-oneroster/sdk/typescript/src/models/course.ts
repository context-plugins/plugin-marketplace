import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Course = {
  sourcedId: string;
};

export const courseSchema: Schema<Course> = s.object<Course>({
  sourcedId: s.string(),
});
