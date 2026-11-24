import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

/** Details describing error condition of a dependency. */
export type GoogleCloudApihubV1DependencyErrorDetail = {
  /** Optional. Error in the dependency. */
  error?: Error1;
  /** Optional. Timestamp at which the error was found. */
  errorTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DependencyErrorDetailSchema: Schema<GoogleCloudApihubV1DependencyErrorDetail> =
  s.object<GoogleCloudApihubV1DependencyErrorDetail>(
    {
      error: s.optional(s.lazy(() => error1Schema)),
      errorTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
