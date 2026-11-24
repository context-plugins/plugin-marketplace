import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type Token400Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const token400ErrorSchema: Schema<Token400Error> = s.object<Token400Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datumSchema)),
  },
  { additionalProperties: s.json() },
);
