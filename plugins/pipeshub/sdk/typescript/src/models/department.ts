import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Department = {
  id: string;
  name: string;
};

export const departmentSchema: Schema<Department> = s.object<Department>({
  id: s.string(),
  name: s.string(),
});
