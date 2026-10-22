import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { customerMetadataSchema, type CustomerMetadata } from "./customer-metadata.js";
import { personSchema, type Person } from "./person.js";

export type Customer = {
  /** Unique identifier. */
  id: string;
  /** Link to company's associated website domains. */
  domains?: string[];
  company: Company;
  /**
   * A map of {string, int} pairs representing counts of each document type associated with this
   * customer.
   */
  documentCounts?: Record<string, number>;
  /** A list of POC for company. */
  poc?: Person[];
  metadata?: CustomerMetadata;
  /** A list of Customers. */
  mergedCustomers?: Customer[];
  /** The date when the interaction with customer started. */
  startDate?: string;
  /** Average contract annual revenue with that customer. */
  contractAnnualRevenue?: number;
  /** User facing (potentially generated) notes about company. */
  notes?: string;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  id: s.string(),
  domains: s.optional(s.array(s.string())),
  company: companySchema,
  documentCounts: s.optional(s.record(s.string(), s.int())),
  poc: s.optional(s.array(s.lazy(() => personSchema))),
  metadata: s.optional(s.lazy(() => customerMetadataSchema)),
  mergedCustomers: s.optional(s.array(s.lazy(() => customerSchema))),
  startDate: s.optional(s.dateOnly()),
  contractAnnualRevenue: s.optional(s.float64()),
  notes: s.optional(s.string()),
});
