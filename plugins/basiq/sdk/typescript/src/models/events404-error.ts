import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2Schema, type Datum2 } from "./datum2.js";

export type Events404Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const events404ErrorSchema: Schema<Events404Error> = s.object<Events404Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum2Schema)),
  },
  { additionalProperties: s.json() },
);
