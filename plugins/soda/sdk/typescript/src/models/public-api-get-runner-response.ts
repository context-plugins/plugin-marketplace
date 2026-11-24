import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiRunnerDtoSchema, type PublicApiRunnerDto } from "./public-api-runner-dto.js";

export type PublicApiGetRunnerResponse = {
  runner?: PublicApiRunnerDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGetRunnerResponseSchema: Schema<PublicApiGetRunnerResponse> =
  s.object<PublicApiGetRunnerResponse>(
    {
      runner: s.optional(s.lazy(() => publicApiRunnerDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
