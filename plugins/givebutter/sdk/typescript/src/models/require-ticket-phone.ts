import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RequireTicketPhone = {
  /** @default "require_ticket_phone" */
  name?: "require_ticket_phone";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requireTicketPhoneSchema: Schema<RequireTicketPhone> = s.object<RequireTicketPhone>(
  {
    name: s.defaulted(s.literal("require_ticket_phone"), "require_ticket_phone"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
