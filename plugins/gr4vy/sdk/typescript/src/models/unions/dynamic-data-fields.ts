import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  braintreeDynamicDataFieldsOptionsSchema,
  type BraintreeDynamicDataFieldsOptions,
} from "../braintree-dynamic-data-fields-options.js";

/** Additional dynamic fields to pass to the Braintree API */
export type DynamicDataFields = BraintreeDynamicDataFieldsOptions;

export const dynamicDataFieldsSchema: Schema<DynamicDataFields> = s.of<DynamicDataFields>(
  s.union([s.lazy(() => braintreeDynamicDataFieldsOptionsSchema)]),
);
