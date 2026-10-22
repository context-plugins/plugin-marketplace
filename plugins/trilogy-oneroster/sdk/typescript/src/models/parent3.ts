import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Parent3 = {
  sourcedId: string;
};

export const parent3Schema: Schema<Parent3> = s.object<Parent3>({
  sourcedId: s.string(),
});
