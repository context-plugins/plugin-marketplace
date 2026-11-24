import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum6Schema, type Datum6 } from "./datum6.js";

export type Reports500Error2 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  data: Datum6[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reports500Error2Schema: Schema<Reports500Error2> = s.object<Reports500Error2>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum6Schema)),
  },
  { additionalProperties: s.json() },
);
