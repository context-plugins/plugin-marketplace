import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type EventsTypes500Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypes500Error1Schema: Schema<EventsTypes500Error1> = s.object<EventsTypes500Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data4Schema)),
  },
  { additionalProperties: s.json() },
);
