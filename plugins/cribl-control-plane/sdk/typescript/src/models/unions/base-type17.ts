import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  restRetryRulesTypeBackoffSchema,
  type RestRetryRulesTypeBackoff,
} from "../rest-retry-rules-type-backoff.js";
import { restRetryRulesTypeNoneSchema, type RestRetryRulesTypeNone } from "../rest-retry-rules-type-none.js";
import {
  restRetryRulesTypeStaticSchema,
  type RestRetryRulesTypeStatic,
} from "../rest-retry-rules-type-static.js";

export type BaseType17 =
  | (RestRetryRulesTypeNone & { type: "none" })
  | (RestRetryRulesTypeStatic & { type: "static" })
  | (RestRetryRulesTypeBackoff & { type: "backoff" });

export const baseType17Schema: Schema<BaseType17> = s.discriminatedUnion<BaseType17>("type", {
  none: restRetryRulesTypeNoneSchema,
  static: restRetryRulesTypeStaticSchema,
  backoff: restRetryRulesTypeBackoffSchema,
});
