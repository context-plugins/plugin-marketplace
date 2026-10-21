import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementDescriptorSchema, type StatementDescriptor } from "../statement-descriptor.js";

/** The statement descriptor is the text to be shown on the buyer's statements. */
export type StatementDescriptor111 = StatementDescriptor;

export const statementDescriptor111Schema: Schema<StatementDescriptor111> = s.of<StatementDescriptor111>(
  s.union([s.lazy(() => statementDescriptorSchema)]),
);
