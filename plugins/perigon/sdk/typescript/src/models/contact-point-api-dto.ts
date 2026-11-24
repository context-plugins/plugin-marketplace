import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { typeSchema, type Type } from "./type.js";

/** Contact point used to deliver monitor notifications. */
export type ContactPointApiDto = {
  /** Unique identifier for the contact point. */
  uuid?: string | null;
  /** Date and time the contact point was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the contact point was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Delivery channel type. API-managed contact points use WEBHOOK. */
  type?: Type | null;
  /** Current lifecycle status of the contact point. */
  status?: Status | null;
  /** Display name for the contact point. */
  name?: string | null;
  /** Email address when the contact point type is email-based. */
  email?: string | null;
  /** HTTPS webhook URL that receives monitor notifications. */
  webhookUrl?: string | null;
  /** Secret used to sign webhook deliveries. */
  webhookSecret?: string | null;
  /** Date and time the contact point was verified, in ISO 8601 format. */
  verifiedAt?: Date | null;
  verified?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactPointApiDtoSchema: Schema<ContactPointApiDto> = s.object<ContactPointApiDto>(
  {
    uuid: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    type: s.optionalNullable(s.lazy(() => typeSchema)),
    status: s.optionalNullable(s.lazy(() => statusSchema)),
    name: s.optionalNullable(s.string()),
    email: s.optionalNullable(s.string()),
    webhookUrl: s.optionalNullable(s.string()),
    webhookSecret: s.optionalNullable(s.string()),
    verifiedAt: s.optionalNullable(s.dateTime()),
    verified: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
