import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseStatusSchema, type ResponseStatus } from "./response-status.js";

/** The type Delete response dto. */
export type StatusDto = {
  status?: ResponseStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusDtoSchema: Schema<StatusDto> = s.object<StatusDto>(
  {
    status: s.optional(s.lazy(() => responseStatusSchema)),
  },
  { additionalProperties: s.json() },
);
