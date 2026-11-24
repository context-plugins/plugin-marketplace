import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalSchema, type Signal } from "./signal.js";

export type BulkSignalsRequest = {
  signals: Signal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSignalsRequestSchema: Schema<BulkSignalsRequest> = s.object<BulkSignalsRequest>(
  {
    signals: s.array(s.lazy(() => signalSchema)),
  },
  { additionalProperties: s.json() },
);
