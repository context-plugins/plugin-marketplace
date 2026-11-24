import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filtersLushaSignalsApiSchema, type FiltersLushaSignalsApi } from "./filters-lusha-signals-api.js";
import { signalType1Schema, type SignalType1 } from "./signal-type1.js";

export type V3CompanySignalsRequest = {
  ids: string[];
  signalTypes: SignalType1[];
  /**
   * For linkedinActivityIntent, results are limited to a trailing 90-day window regardless of the
   * value passed (legal requirement). Other signal types are unaffected.
   */
  startDate?: string;
  /**
   * For linkedinActivityIntent, results are capped at 50 per company regardless of the value
   * passed. Other signal types use the requested value as-is (1-100).
   */
  maxResultsPerSignal?: number;
  /**
   * Optional. If provided, these companies are also added to this table (if not already present)
   * and the Signals column is populated. See the Tables API.
   */
  tableId?: string;
  filters?: FiltersLushaSignalsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompanySignalsRequestProperties: s.Shape<V3CompanySignalsRequest> = {
  ids: s.array(s.string()),
  signalTypes: s.array(s.lazy(() => signalType1Schema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
  tableId: s.optional(s.string()),
  filters: s.optional(s.lazy(() => filtersLushaSignalsApiSchema)),
};

export const v3CompanySignalsRequestInternalSchema: Schema<V3CompanySignalsRequest> =
  s.object<V3CompanySignalsRequest>(v3CompanySignalsRequestProperties, { additionalProperties: s.json() });

export const v3CompanySignalsRequestSchema: Schema<V3CompanySignalsRequest> = s.lazySchema(() =>
  s.object<V3CompanySignalsRequest>(
    {
      ...v3CompanySignalsRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
      maxResultsPerSignal: s.optional(s.int().check(s.gte(1), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
