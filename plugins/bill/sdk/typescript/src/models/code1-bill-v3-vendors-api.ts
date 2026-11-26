import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Code1BillV3VendorsApi = {
  /** Name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const code1BillV3VendorsApiSchema: Schema<Code1BillV3VendorsApi> = s.object<Code1BillV3VendorsApi>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
