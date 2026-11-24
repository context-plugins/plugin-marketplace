import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data11Schema, type Data11 } from "./data11.js";

export type EventsTypes503Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data11[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypes503ErrorSchema: Schema<EventsTypes503Error> = s.object<EventsTypes503Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data11Schema)),
  },
  { additionalProperties: s.json() },
);
