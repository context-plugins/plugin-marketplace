import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { MatchMode, matchModeSchema } from "./match-mode.js";
import { platformSchema, type Platform } from "./platform.js";
import {
  typeBundleSocialAutomationApiSchema,
  type TypeBundleSocialAutomationApi,
} from "./type-bundle-social-automation-api.js";

export type Trigger = {
  keywords?: string[];
  /** @default MatchMode.Any */
  matchMode?: MatchMode;
  /** @default false */
  caseSensitive?: boolean;
  senderExternalIds?: string[];
  payloads?: string[];
  /** @default 0 */
  actionDelaySeconds?: number;
  id?: string;
  type: TypeBundleSocialAutomationApi;
  platform: Platform;
  socialAccountId: string;
  postId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const triggerProperties: s.Shape<Trigger> = {
  keywords: s.optional(s.array(s.string())),
  matchMode: s.defaulted(matchModeSchema, MatchMode.Any),
  caseSensitive: s.defaulted(s.boolean(), false),
  senderExternalIds: s.optional(s.array(s.string())),
  payloads: s.optional(s.array(s.string())),
  actionDelaySeconds: s.defaulted(s.int(), 0),
  id: s.optional(s.string()),
  type: typeBundleSocialAutomationApiSchema,
  platform: platformSchema,
  socialAccountId: s.string(),
  postId: s.optionalNullable(s.string()),
};

export const triggerInternalSchema: Schema<Trigger> = s.object<Trigger>(triggerProperties, {
  additionalProperties: s.json(),
});

export const triggerSchema: Schema<Trigger> = s.lazySchema(() =>
  s.object<Trigger>(
    {
      ...triggerProperties,
      keywords: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(200))).check(s.maxLength(100)),
      ),
      senderExternalIds: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(64))).check(s.maxLength(100)),
      ),
      payloads: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(1000))).check(s.maxLength(100)),
      ),
      actionDelaySeconds: s.defaulted(s.int().check(s.gte(0), s.lte(86400)), 0),
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
    },
    { additionalProperties: s.json() },
  ),
);
