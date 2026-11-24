import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backfillJob2Schema, type BackfillJob2 } from "./backfill-job2.js";
import { customizationRuleSchema, type CustomizationRule } from "./customization-rule.js";
import { errorSchema, type Error } from "./error.js";
import { sourceObjectIdentifier4Schema, type SourceObjectIdentifier4 } from "./source-object-identifier4.js";

/** The stream object resource a backfill job was started for. */
export type StreamObject2 = {
  /** Output only. Identifier. The object resource's name. */
  name?: string;
  /**
   * Output only. The customization rules for the object. These rules are derived from the parent
   * Stream's `rule_sets` and represent the intended configuration for the object.
   */
  customizationRules?: CustomizationRule[];
  /** The object identifier in the data source. */
  sourceObject?: SourceObjectIdentifier4;
  /** Output only. The creation time of the object. */
  createTime?: string;
  /** Output only. The last update time of the object. */
  updateTime?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. Active errors on the object. */
  errors?: Error[];
  /** The latest backfill job that was initiated for the stream object. */
  backfillJob?: BackfillJob2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamObject2Schema: Schema<StreamObject2> = s.object<StreamObject2>(
  {
    name: s.optional(s.string()),
    customizationRules: s.optional(s.array(s.lazy(() => customizationRuleSchema))),
    sourceObject: s.optional(s.lazy(() => sourceObjectIdentifier4Schema)),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    backfillJob: s.optional(s.lazy(() => backfillJob2Schema)),
  },
  { additionalProperties: s.json() },
);
