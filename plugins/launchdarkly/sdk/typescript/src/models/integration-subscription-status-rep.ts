import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { integrationStatusRepSchema, type IntegrationStatusRep } from "./integration-status-rep.js";

export type IntegrationSubscriptionStatusRep = {
  successCount?: number;
  lastSuccess?: number;
  lastError?: number;
  errorCount?: number;
  errors?: IntegrationStatusRep[];
};

export const integrationSubscriptionStatusRepSchema: Schema<IntegrationSubscriptionStatusRep> =
  s.object<IntegrationSubscriptionStatusRep>({
    successCount: s.optional(s.int()),
    lastSuccess: s.optional(s.int()),
    lastError: s.optional(s.int()),
    errorCount: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => integrationStatusRepSchema))),
  });
