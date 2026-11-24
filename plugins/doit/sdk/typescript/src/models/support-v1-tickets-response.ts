import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SupportV1TicketsResponse = {
  id?: number;
  status?: string;
  assignee?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportV1TicketsResponseSchema: Schema<SupportV1TicketsResponse> =
  s.object<SupportV1TicketsResponse>(
    {
      id: s.optional(s.int()),
      status: s.optional(s.string()),
      assignee: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
