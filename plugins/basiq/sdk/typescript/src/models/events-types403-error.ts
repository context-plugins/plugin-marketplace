import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type EventsTypes403Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypes403ErrorSchema: Schema<EventsTypes403Error> = s.object<EventsTypes403Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data3Schema)),
  },
  { additionalProperties: s.json() },
);
