import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Owner = {
  /** The owner ID */
  id: string;
  /** The owner type */
  type: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ownerSchema: Schema<Owner> = s.object<Owner>(
  {
    id: s.string(),
    type: typeSchema,
  },
  { additionalProperties: s.json() },
);
