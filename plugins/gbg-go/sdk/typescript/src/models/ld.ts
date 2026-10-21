import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type Ld = {
  name: Name;
  data: string;
};

export const ldSchema: Schema<Ld> = s.object<Ld>({
  name: nameSchema,
  data: s.string(),
});
