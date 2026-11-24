import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSiteRequest = {
  url: string;
  /** IANA zone. Omitted = the server default. */
  timezone?: string;
  /** Request a hobby site. The domain must match a configured hobby suffix. @default false */
  hobby?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSiteRequestSchema: Schema<CreateSiteRequest> = s.object<CreateSiteRequest>(
  {
    url: s.string(),
    timezone: s.optional(s.string()),
    hobby: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
