import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { requiredFieldsSchema, type RequiredFields } from "../required-fields.js";

/** Fields that are required for this card type. */
export type RequiredFields1Model = RequiredFields;

export const requiredFields1ModelSchema: Schema<RequiredFields1Model> = s.of<RequiredFields1Model>(
  s.union([s.lazy(() => requiredFieldsSchema)]),
);
