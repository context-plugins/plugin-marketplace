import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type ImportBundleSocialMiscApi = {
  id: string;
  teamId: string;
  socialAccountId: string;
  requestedCount: number;
  status: Status3;
  reviewsImported: number;
  error?: string | null;
  rateLimitResetAt?: Date | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importBundleSocialMiscApiSchema: Schema<ImportBundleSocialMiscApi> =
  s.object<ImportBundleSocialMiscApi>(
    {
      id: s.string(),
      teamId: s.string(),
      socialAccountId: s.string(),
      requestedCount: s.float64(),
      status: status3Schema,
      reviewsImported: s.float64(),
      error: s.optionalNullable(s.string()),
      rateLimitResetAt: s.optionalNullable(s.dateTime()),
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
