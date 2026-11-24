import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companySignalDataInternalSchema,
  companySignalDataSchema,
  type CompanySignalData,
} from "./company-signal-data.js";

export type CompanySignalsByIdResponse = {
  companies?: Record<string, CompanySignalData>;
  endDate?: string;
  startDate?: string;
  creditCharged?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySignalsByIdResponseProperties: s.Shape<CompanySignalsByIdResponse> = {
  companies: s.optional(
    s.record(
      s.string(),
      s.lazy(() => companySignalDataInternalSchema),
    ),
  ),
  endDate: s.optional(s.dateOnly()),
  startDate: s.optional(s.dateOnly()),
  creditCharged: s.optional(s.int()),
};

export const companySignalsByIdResponseInternalSchema: Schema<CompanySignalsByIdResponse> =
  s.object<CompanySignalsByIdResponse>(companySignalsByIdResponseProperties, {
    additionalProperties: s.json(),
  });

export const companySignalsByIdResponseSchema: Schema<CompanySignalsByIdResponse> = s.lazySchema(() =>
  s.object<CompanySignalsByIdResponse>(
    {
      ...companySignalsByIdResponseProperties,
      companies: s.optional(
        s.record(
          s.string(),
          s.lazy(() => companySignalDataSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
