import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregatedInputOutputStatusBody2Schema,
  type AggregatedInputOutputStatusBody2,
} from "./aggregated-input-output-status-body2.js";

/** Status of the Source, aggregated across all Worker Processes. */
export type InputStatus = {
  /** Unique identifier of the Source or Destination. */
  id: string;
  /** Status information for the Source or Destination, aggregated across all Worker Processes. */
  status: AggregatedInputOutputStatusBody2;
  /** Type of the Source or Destination. */
  type?: string;
};

export const inputStatusSchema: Schema<InputStatus> = s.object<InputStatus>({
  id: s.string(),
  status: aggregatedInputOutputStatusBody2Schema,
  type: s.optional(s.string()),
});
