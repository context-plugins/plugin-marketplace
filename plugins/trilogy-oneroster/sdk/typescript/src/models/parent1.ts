import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Parent1 = {
  href: string;
  sourcedId: string;
  type: Type2;
};

export const parent1Schema: Schema<Parent1> = s.object<Parent1>({
  href: s.string(),
  sourcedId: s.string(),
  type: type2Schema,
});
