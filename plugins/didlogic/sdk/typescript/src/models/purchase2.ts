import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errors1Schema, type Errors1 } from "./errors1.js";
import { purchase1Schema, type Purchase1 } from "./purchase1.js";

/** Purchase response object */
export type Purchase2 = {
  /** Errors that occurred during purchase */
  errors: Errors1;
  /** Successfully purchased numbers */
  purchases: Purchase1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purchase2Schema: Schema<Purchase2> = s.object<Purchase2>(
  {
    errors: errors1Schema,
    purchases: s.array(s.lazy(() => purchase1Schema)),
  },
  { additionalProperties: s.json() },
);
