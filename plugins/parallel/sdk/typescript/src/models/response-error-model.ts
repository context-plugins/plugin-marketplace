import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details of a failed response. */
export type ResponseErrorModel = {
  /** Error code; currently always "server_error". @default "server_error" */
  code?: "server_error";
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseErrorModelSchema: Schema<ResponseErrorModel> = s.object<ResponseErrorModel>(
  {
    code: s.defaulted(s.literal("server_error"), "server_error"),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
