import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthUser = {
  address?: string;
  avatar?: string;
  birthDate?: string;
  createdAt?: string;
  createdById?: string;
  databaseConnectionString?: string;
  deletedAt?: string;
  deletedById?: string;
  domainTargets?: string[];
  email?: string;
  gender?: string;
  id?: string;
  isVerified?: boolean;
  name?: string;
  onboardingCompletedAt?: string;
  otp?: Record<string, unknown>;
  phoneNumber?: string;
  rabbitMqQueueName?: string;
  updatedAt?: string;
  updatedById?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authUserSchema: Schema<AuthUser> = s.object<AuthUser>(
  {
    address: s.optional(s.string()),
    avatar: s.optional(s.string()),
    birthDate: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    createdById: s.optional(s.string()),
    databaseConnectionString: s.optional(s.string()),
    deletedAt: s.optional(s.string()),
    deletedById: s.optional(s.string()),
    domainTargets: s.optional(s.array(s.string())),
    email: s.optional(s.string()),
    gender: s.optional(s.string()),
    id: s.optional(s.string()),
    isVerified: s.optional(s.boolean()),
    name: s.optional(s.string()),
    onboardingCompletedAt: s.optional(s.string()),
    otp: s.optional(s.record(s.string(), s.unknown())),
    phoneNumber: s.optional(s.string()),
    rabbitMqQueueName: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    updatedById: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
