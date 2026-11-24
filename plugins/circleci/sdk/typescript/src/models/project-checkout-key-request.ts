import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type ProjectCheckoutKeyRequest = {
  /** The type of checkout key to create */
  type: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectCheckoutKeyRequestSchema: Schema<ProjectCheckoutKeyRequest> =
  s.object<ProjectCheckoutKeyRequest>(
    {
      type: type1Schema,
    },
    { additionalProperties: s.json() },
  );
