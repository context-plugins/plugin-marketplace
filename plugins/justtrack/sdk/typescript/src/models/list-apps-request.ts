import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListAppsRequest = {
  page: RequiredPage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listAppsRequestProperties: s.Shape<ListAppsRequest> = {
  page: requiredPageInternalSchema,
};

export const listAppsRequestInternalSchema: Schema<ListAppsRequest> = s.object<ListAppsRequest>(
  listAppsRequestProperties,
  { additionalProperties: s.json() },
);

export const listAppsRequestSchema: Schema<ListAppsRequest> = s.lazySchema(() =>
  s.object<ListAppsRequest>(
    {
      ...listAppsRequestProperties,
      page: requiredPageSchema,
    },
    { additionalProperties: s.json() },
  ),
);
