import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TeamResponse1 = {
  id: string;
  name: string;
  avatarUrl?: string | null;
  organizationId: string;
  createdById: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TeamResponse1Schema: Schema<ApiV1TeamResponse1> = s.object<ApiV1TeamResponse1>(
  {
    id: s.string(),
    name: s.string(),
    avatarUrl: s.optionalNullable(s.string()),
    organizationId: s.string(),
    createdById: s.string(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
