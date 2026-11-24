import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotFoundHttpException1 = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundHttpException1Schema: Schema<NotFoundHttpException1> = s.object<NotFoundHttpException1>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
