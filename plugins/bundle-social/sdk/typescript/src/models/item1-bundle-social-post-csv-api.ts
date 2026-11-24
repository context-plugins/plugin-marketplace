import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status4BundleSocialPostCsvApiSchema,
  type Status4BundleSocialPostCsvApi,
} from "./status4-bundle-social-post-csv-api.js";

export type Item1BundleSocialPostCsvApi = {
  id: string;
  importId: string;
  rowNumber: number;
  status: Status4BundleSocialPostCsvApi;
  postId?: string | null;
  rawRow?: Record<string, string> | null;
  normalizedPayload?: Record<string, unknown>;
  error?: string | null;
  createdAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1BundleSocialPostCsvApiSchema: Schema<Item1BundleSocialPostCsvApi> =
  s.object<Item1BundleSocialPostCsvApi>(
    {
      id: s.string(),
      importId: s.string(),
      rowNumber: s.float64(),
      status: status4BundleSocialPostCsvApiSchema,
      postId: s.optionalNullable(s.string()),
      rawRow: s.optionalNullable(s.record(s.string(), s.string())),
      normalizedPayload: s.optional(s.record(s.string(), s.unknown())),
      error: s.optionalNullable(s.string()),
      createdAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
