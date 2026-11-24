import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customerByExternalIdSchema, type CustomerByExternalId } from "../customer-by-external-id.js";
import { customerByIdSchema, type CustomerById } from "../customer-by-id.js";

export type CustomerAttribution = CustomerById | CustomerByExternalId;

export const customerAttributionSchema: Schema<CustomerAttribution> = s.of<CustomerAttribution>(
  s.union([s.lazy(() => customerByIdSchema), s.lazy(() => customerByExternalIdSchema)]),
);
