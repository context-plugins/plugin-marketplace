import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Mode, modeSchema } from "./mode.js";

export type ApiV1ApprovalsSessionsRequest = {
  approver: string;
  /** @default Mode.Hosted */
  mode?: Mode;
  origin?: string;
  returnUrl?: string;
  expiresIn?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ApprovalsSessionsRequestProperties: s.Shape<ApiV1ApprovalsSessionsRequest> = {
  approver: s.string(),
  mode: s.defaulted(modeSchema, Mode.Hosted),
  origin: s.optional(s.string()),
  returnUrl: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
};

export const apiV1ApprovalsSessionsRequestInternalSchema: Schema<ApiV1ApprovalsSessionsRequest> =
  s.object<ApiV1ApprovalsSessionsRequest>(apiV1ApprovalsSessionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ApprovalsSessionsRequestSchema: Schema<ApiV1ApprovalsSessionsRequest> = s.lazySchema(() =>
  s.object<ApiV1ApprovalsSessionsRequest>(
    {
      ...apiV1ApprovalsSessionsRequestProperties,
      approver: s.string().check(s.minLength(1), s.maxLength(320)),
      origin: s.optional(s.string().check(s.maxLength(255))),
      returnUrl: s.optional(s.string().check(s.maxLength(2000))),
      expiresIn: s.optional(s.int().check(s.gte(60), s.lte(86400))),
    },
    { additionalProperties: s.json() },
  ),
);
