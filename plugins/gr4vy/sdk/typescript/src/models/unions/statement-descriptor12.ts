import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementDescriptorSchema, type StatementDescriptor } from "../statement-descriptor.js";

/**
 * Details about the payment and the merchant which may end up on the (bank) statement for the
 * payment.
 */
export type StatementDescriptor12 = StatementDescriptor;

export const statementDescriptor12Schema: Schema<StatementDescriptor12> = s.of<StatementDescriptor12>(
  s.union([s.lazy(() => statementDescriptorSchema)]),
);
