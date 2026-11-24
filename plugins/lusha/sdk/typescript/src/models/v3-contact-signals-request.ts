import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalTypeSchema, type SignalType } from "./signal-type.js";

export type V3ContactSignalsRequest = {
  ids: string[];
  signalTypes: SignalType[];
  startDate?: string;
  maxResultsPerSignal?: number;
  /**
   * Optional. If provided, these contacts are also added to this table (if not already present) and
   * the Signals column is populated. See the Tables API.
   */
  tableId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactSignalsRequestProperties: s.Shape<V3ContactSignalsRequest> = {
  ids: s.array(s.string()),
  signalTypes: s.array(s.lazy(() => signalTypeSchema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
  tableId: s.optional(s.string()),
};

export const v3ContactSignalsRequestInternalSchema: Schema<V3ContactSignalsRequest> =
  s.object<V3ContactSignalsRequest>(v3ContactSignalsRequestProperties, { additionalProperties: s.json() });

export const v3ContactSignalsRequestSchema: Schema<V3ContactSignalsRequest> = s.lazySchema(() =>
  s.object<V3ContactSignalsRequest>(
    {
      ...v3ContactSignalsRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
      maxResultsPerSignal: s.optional(s.int().check(s.gte(1), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
