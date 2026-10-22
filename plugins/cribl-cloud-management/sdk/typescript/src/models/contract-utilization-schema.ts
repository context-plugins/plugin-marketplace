import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditsUtilizationItemSchemaSchema,
  type CreditsUtilizationItemSchema,
} from "./credits-utilization-item-schema.js";

export type ContractUtilizationSchema = {
  /** Contract start date in ISO 8601 format. */
  contractStartDate: Date;
  /** Contract end date in ISO 8601 format. Present only when the contract is closed. */
  contractEndDate?: Date;
  /** Cumulative credit utilization entries for the contract. */
  items: CreditsUtilizationItemSchema[];
};

export const contractUtilizationSchemaSchema: Schema<ContractUtilizationSchema> =
  s.object<ContractUtilizationSchema>({
    contractStartDate: s.dateTime(),
    contractEndDate: s.optional(s.dateTime()),
    items: s.array(s.lazy(() => creditsUtilizationItemSchemaSchema)),
  });
