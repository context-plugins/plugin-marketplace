import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  splunkRetryRulesTypeBackoffSchema,
  type SplunkRetryRulesTypeBackoff,
} from "../splunk-retry-rules-type-backoff.js";
import {
  splunkRetryRulesTypeNoneSchema,
  type SplunkRetryRulesTypeNone,
} from "../splunk-retry-rules-type-none.js";
import {
  splunkRetryRulesTypeStaticSchema,
  type SplunkRetryRulesTypeStatic,
} from "../splunk-retry-rules-type-static.js";

export type BaseType21 =
  | (SplunkRetryRulesTypeNone & { type: "none" })
  | (SplunkRetryRulesTypeStatic & { type: "static" })
  | (SplunkRetryRulesTypeBackoff & { type: "backoff" });

export const baseType21Schema: Schema<BaseType21> = s.discriminatedUnion<BaseType21>("type", {
  none: splunkRetryRulesTypeNoneSchema,
  static: splunkRetryRulesTypeStaticSchema,
  backoff: splunkRetryRulesTypeBackoffSchema,
});
