import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CourseComponent = {
  sourcedId: string;
};

export const courseComponentSchema: Schema<CourseComponent> = s.object<CourseComponent>({
  sourcedId: s.string(),
});
