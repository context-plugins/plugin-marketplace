import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceOptionSchema, type ServiceOption } from "./service-option.js";

export type ServiceOptionHoldResponse = {
  /** The unique identifier for the time slot hold. */
  holdId?: string;
  /** The time at which the hold expires and the time slot is released. */
  expiresAt?: Date;
  serviceOption?: ServiceOption;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceOptionHoldResponseSchema: Schema<ServiceOptionHoldResponse> =
  s.object<ServiceOptionHoldResponse>(
    {
      holdId: s.optional(s.string()),
      expiresAt: s.optional(s.dateTime()),
      serviceOption: s.optional(s.lazy(() => serviceOptionSchema)),
      _keysMap: {
        holdId: "hold_id",
        expiresAt: "expires_at",
        serviceOption: "service_option",
      },
    },
    { additionalProperties: s.json() },
  );
