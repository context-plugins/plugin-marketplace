import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { company1LushaSignalsApiSchema, type Company1LushaSignalsApi } from "./company1-lusha-signals-api.js";
import { filters1LushaSignalsApiSchema, type Filters1LushaSignalsApi } from "./filters1-lusha-signals-api.js";
import { signal1Schema, type Signal1 } from "./signal1.js";

export type CompanySignalsSearchRequest = {
  companies: Company1LushaSignalsApi[];
  signals: Signal1[];
  startDate?: string;
  maxResultsPerSignal?: number;
  filters?: Filters1LushaSignalsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySignalsSearchRequestProperties: s.Shape<CompanySignalsSearchRequest> = {
  companies: s.array(s.lazy(() => company1LushaSignalsApiSchema)),
  signals: s.array(s.lazy(() => signal1Schema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
  filters: s.optional(s.lazy(() => filters1LushaSignalsApiSchema)),
};

export const companySignalsSearchRequestInternalSchema: Schema<CompanySignalsSearchRequest> =
  s.object<CompanySignalsSearchRequest>(companySignalsSearchRequestProperties, {
    additionalProperties: s.json(),
  });

export const companySignalsSearchRequestSchema: Schema<CompanySignalsSearchRequest> = s.lazySchema(() =>
  s.object<CompanySignalsSearchRequest>(
    {
      ...companySignalsSearchRequestProperties,
      companies: s.array(s.lazy(() => company1LushaSignalsApiSchema)).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
