import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";

export type CompanyEnrichmentResult = {
  enrichmentId?: string;
  status?: JobStatus;
  percentCompleted?: number;
  companies?: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyEnrichmentResultSchema: Schema<CompanyEnrichmentResult> =
  s.object<CompanyEnrichmentResult>(
    {
      enrichmentId: s.optional(s.string()),
      status: s.optional(s.lazy(() => jobStatusSchema)),
      percentCompleted: s.optional(s.int()),
      companies: s.optional(s.array(s.lazy(() => companySchema))),
      _keysMap: {
        enrichmentId: "enrichmentID",
      },
    },
    { additionalProperties: s.json() },
  );
