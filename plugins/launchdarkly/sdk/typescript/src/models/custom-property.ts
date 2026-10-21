import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomProperty = {
  /** The name of the custom property of this type. */
  name: string;
  /** An array of values for the custom property data to associate with this flag. */
  value: string[];
};

export const customPropertySchema: Schema<CustomProperty> = s.object<CustomProperty>({
  name: s.string(),
  value: s.array(s.string()),
});
