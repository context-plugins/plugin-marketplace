import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SeatAssignee = {
  id: string;
  externalId: string;
  email: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const seatAssigneeSchema: Schema<SeatAssignee> = s.object<SeatAssignee>(
  {
    id: s.string(),
    externalId: s.string(),
    email: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
