import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotFoundHttpException = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundHttpExceptionSchema: Schema<NotFoundHttpException> = s.object<NotFoundHttpException>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
