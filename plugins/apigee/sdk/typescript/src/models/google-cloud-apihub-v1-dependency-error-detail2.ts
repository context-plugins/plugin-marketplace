import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

/** Output only. Error details of a dependency if the system has detected it internally. */
export type GoogleCloudApihubV1DependencyErrorDetail2 = {
  /** Optional. Error in the dependency. */
  error?: Error1;
  /** Optional. Timestamp at which the error was found. */
  errorTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DependencyErrorDetail2Schema: Schema<GoogleCloudApihubV1DependencyErrorDetail2> =
  s.object<GoogleCloudApihubV1DependencyErrorDetail2>(
    {
      error: s.optional(s.lazy(() => error1Schema)),
      errorTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
