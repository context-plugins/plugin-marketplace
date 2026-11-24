import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { primarySchema, type Primary } from "./primary.js";

export type Purpose = {
  primary: Primary;
  other?: boolean | null;
};

export const purposeSchema: Schema<Purpose> = s.object<Purpose>({
  primary: primarySchema,
  other: s.optionalNullable(s.boolean()),
});
