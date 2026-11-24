import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchSeatAssignmentsRequestAssignmentsItems = {
  seatId: string;
  userExternalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchSeatAssignmentsRequestAssignmentsItemsSchema: Schema<BatchSeatAssignmentsRequestAssignmentsItems> =
  s.object<BatchSeatAssignmentsRequestAssignmentsItems>(
    {
      seatId: s.string(),
      userExternalId: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
