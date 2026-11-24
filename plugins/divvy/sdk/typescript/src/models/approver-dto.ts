import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approverStatusDtoSchema, type ApproverStatusDto } from "./approver-status-dto.js";

/** Approver DTO. */
export type ApproverDto = {
  /**
   * BILL-generated ID of the individual user or approval group.
   * * **Individual user**: The value begins with `006`.
   * * **Approval group**: The value begins with `agp`.
   */
  userId: string;
  status?: ApproverStatusDto;
  /** Bill approval order. */
  approverOrder?: number;
  /** Status change date and time */
  statusChangedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approverDtoSchema: Schema<ApproverDto> = s.object<ApproverDto>(
  {
    userId: s.string(),
    status: s.optional(s.lazy(() => approverStatusDtoSchema)),
    approverOrder: s.optional(s.float64()),
    statusChangedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
