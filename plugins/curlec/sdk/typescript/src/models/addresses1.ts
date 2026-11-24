import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { residentialSchema, type Residential } from "./residential.js";

export type Addresses1 = {
  residential?: Residential;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addresses1Schema: Schema<Addresses1> = s.object<Addresses1>(
  {
    residential: s.optional(s.lazy(() => residentialSchema)),
  },
  { additionalProperties: s.json() },
);
