import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Every failure answers with this envelope; `message` is safe to show a user. */
export type ApiErrorModel = {
  code: number;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  {
    code: s.int(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
