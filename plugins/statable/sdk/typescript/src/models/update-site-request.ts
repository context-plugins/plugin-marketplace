import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Omitted fields are left unchanged. */
export type UpdateSiteRequest = {
  /** Must start with http:// or https://. */
  url?: string;
  timezone?: string;
  /** 0 = Sunday … 6 = Saturday. */
  weekStart?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateSiteRequestProperties: s.Shape<UpdateSiteRequest> = {
  url: s.optional(s.string()),
  timezone: s.optional(s.string()),
  weekStart: s.optional(s.int()),
  _keysMap: {
    weekStart: "week_start",
  },
};

export const updateSiteRequestInternalSchema: Schema<UpdateSiteRequest> = s.object<UpdateSiteRequest>(
  updateSiteRequestProperties,
  { additionalProperties: s.json() },
);

export const updateSiteRequestSchema: Schema<UpdateSiteRequest> = s.lazySchema(() =>
  s.object<UpdateSiteRequest>(
    {
      ...updateSiteRequestProperties,
      weekStart: s.optional(s.int().check(s.gte(0), s.lte(6))),
    },
    { additionalProperties: s.json() },
  ),
);
