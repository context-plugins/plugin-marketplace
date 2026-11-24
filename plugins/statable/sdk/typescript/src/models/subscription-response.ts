import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type SubscriptionResponse = {
  status: Status;
  isTrial: boolean;
  /**
   * When the current state stops being true — the trial's end while trialing, the paid period's end
   * otherwise. Absent when unknown.
   */
  endsAt?: Date;
  /** True when the account has hobby sites and nothing else. */
  onlyHobby: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = s.object<SubscriptionResponse>(
  {
    status: statusSchema,
    isTrial: s.boolean(),
    endsAt: s.optional(s.dateTime()),
    onlyHobby: s.boolean(),
    _keysMap: {
      isTrial: "is_trial",
      endsAt: "ends_at",
      onlyHobby: "only_hobby",
    },
  },
  { additionalProperties: s.json() },
);
