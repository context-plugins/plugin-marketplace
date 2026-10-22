import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionsSchema, type Conditions } from "./unions/conditions.js";

/** A collection of checkout fields and the conditions under which they are required. */
export type RequiredCheckoutFields = {
  /** A list of transaction fields that are required to process a payment for this service. */
  requiredFields: string[];
  /** The conditions under which these fields are required */
  conditions?: Conditions;
};

export const requiredCheckoutFieldsSchema: Schema<RequiredCheckoutFields> = s.object<RequiredCheckoutFields>({
  requiredFields: s.array(s.string()),
  conditions: s.optional(s.lazy(() => conditionsSchema)),
  _keysMap: {
    requiredFields: "required_fields",
  },
});
