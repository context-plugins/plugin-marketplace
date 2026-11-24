import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailsSchema, type Details } from "./details.js";

export type ErrorDeliverdDevReportsApi = {
  /** @default "version_conflict" */
  code?: "version_conflict";
  message: string;
  details: Details;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDeliverdDevReportsApiSchema: Schema<ErrorDeliverdDevReportsApi> =
  s.object<ErrorDeliverdDevReportsApi>(
    {
      code: s.defaulted(s.literal("version_conflict"), "version_conflict"),
      message: s.string(),
      details: detailsSchema,
    },
    { additionalProperties: s.json() },
  );
