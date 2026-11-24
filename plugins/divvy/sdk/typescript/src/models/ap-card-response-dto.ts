import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apCardStatusSchema, type ApCardStatus } from "./ap-card-status.js";

/** AP Card response DTO. */
export type ApCardResponseDto = {
  /** BILL-generated ID of the AP Card. The value begins with `dva`. */
  id: string;
  status?: ApCardStatus;
  /** Full name on the AP Card */
  nameOnAccount?: string;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** AP Card available balance */
  balance?: number;
  /** AP Card spending limit */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apCardResponseDtoSchema: Schema<ApCardResponseDto> = s.object<ApCardResponseDto>(
  {
    id: s.string(),
    status: s.optional(s.lazy(() => apCardStatusSchema)),
    nameOnAccount: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    balance: s.optional(s.float64()),
    limit: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
