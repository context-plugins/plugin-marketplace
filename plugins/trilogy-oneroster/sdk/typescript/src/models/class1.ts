import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Class1 = {
  sourcedId: string;
};

export const class1Schema: Schema<Class1> = s.object<Class1>({
  sourcedId: s.string(),
});
