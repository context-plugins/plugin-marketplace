import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statementDescriptorSchema, type StatementDescriptor } from "../statement-descriptor.js";

/** The statement descriptor for the payment link. */
export type StatementDescriptor1Model = StatementDescriptor;

export const statementDescriptor1ModelSchema: Schema<StatementDescriptor1Model> =
  s.of<StatementDescriptor1Model>(s.union([s.lazy(() => statementDescriptorSchema)]));
