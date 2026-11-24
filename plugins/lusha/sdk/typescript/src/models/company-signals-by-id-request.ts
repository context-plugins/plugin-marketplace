import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filters1LushaSignalsApiSchema, type Filters1LushaSignalsApi } from "./filters1-lusha-signals-api.js";
import { signal1Schema, type Signal1 } from "./signal1.js";

export type CompanySignalsByIdRequest = {
  companyIds: number[];
  signals: Signal1[];
  startDate?: string;
  maxResultsPerSignal?: number;
  filters?: Filters1LushaSignalsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySignalsByIdRequestProperties: s.Shape<CompanySignalsByIdRequest> = {
  companyIds: s.array(s.int()),
  signals: s.array(s.lazy(() => signal1Schema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
  filters: s.optional(s.lazy(() => filters1LushaSignalsApiSchema)),
};

export const companySignalsByIdRequestInternalSchema: Schema<CompanySignalsByIdRequest> =
  s.object<CompanySignalsByIdRequest>(companySignalsByIdRequestProperties, {
    additionalProperties: s.json(),
  });

export const companySignalsByIdRequestSchema: Schema<CompanySignalsByIdRequest> = s.lazySchema(() =>
  s.object<CompanySignalsByIdRequest>(
    {
      ...companySignalsByIdRequestProperties,
      companyIds: s.array(s.int()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
