import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Simple DTO to respond to requests with a status of "success". */
export type SpendStatusDto = {
  /** Status of the request, e.g. "SUCCESS" */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spendStatusDtoSchema: Schema<SpendStatusDto> = s.object<SpendStatusDto>(
  {
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
