import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalEventDtoSchema, type SignalEventDto } from "./signal-event-dto.js";

/** Paginated list of monitor events. */
export type MonitorEventListResult = {
  /** Total number of matching events across all pages. */
  total: number;
  /** Events returned for the requested page. */
  data: SignalEventDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorEventListResultSchema: Schema<MonitorEventListResult> = s.object<MonitorEventListResult>(
  {
    total: s.int(),
    data: s.array(s.lazy(() => signalEventDtoSchema)),
  },
  { additionalProperties: s.json() },
);
