import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Resource3 = {
  sourcedId: string;
};

export const resource3Schema: Schema<Resource3> = s.object<Resource3>({
  sourcedId: s.string(),
});
