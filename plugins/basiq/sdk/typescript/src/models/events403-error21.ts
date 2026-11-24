import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type Events403Error21 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const events403Error21Schema: Schema<Events403Error21> = s.object<Events403Error21>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data3Schema)),
  },
  { additionalProperties: s.json() },
);
