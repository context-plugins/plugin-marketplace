import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type School = {
  sourcedId: string;
};

export const schoolSchema: Schema<School> = s.object<School>({
  sourcedId: s.string(),
});
