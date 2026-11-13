import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data = {
  id: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, Record<string, unknown>[]>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    id: s.array(s.int()),
  },
  { additionalProperties: s.array(s.record(s.string(), s.unknown())) },
);
