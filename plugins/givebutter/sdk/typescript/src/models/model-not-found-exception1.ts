import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelNotFoundException1 = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelNotFoundException1Schema: Schema<ModelNotFoundException1> =
  s.object<ModelNotFoundException1>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
