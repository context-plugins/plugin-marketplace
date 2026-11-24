import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backfillAllStrategy1Schema, type BackfillAllStrategy1 } from "./backfill-all-strategy1.js";
import { destinationConfig2Schema, type DestinationConfig2 } from "./destination-config2.js";
import { errorSchema, type Error } from "./error.js";
import { ruleSetSchema, type RuleSet } from "./rule-set.js";
import { sourceConfig2Schema, type SourceConfig2 } from "./source-config2.js";
import { state1Schema, type State1 } from "./state1.js";

/** A resource representing streaming data from a source to a destination. */
export type Stream = {
  /**
   * Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the
   * data. If left blank, data will be encrypted using an internal Stream-specific encryption key
   * provisioned through KMS.
   */
  customerManagedEncryptionKey?: string;
  /** Required. Destination connection profile configuration. */
  destinationConfig?: DestinationConfig2;
  /**
   * Output only. If the stream was recovered, the time of the last recovery. Note: This field is
   * currently experimental.
   */
  lastRecoveryTime?: string;
  /** Output only. The last update time of the stream. */
  updateTime?: string;
  /** Output only. Identifier. The stream's name. */
  name?: string;
  /** The state of the stream. */
  state?: State1;
  /** Output only. The creation time of the stream. */
  createTime?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Rule sets to apply to the stream. */
  ruleSets?: RuleSet[];
  /** Required. Display name. */
  displayName?: string;
  /** Required. Source connection profile configuration. */
  sourceConfig?: SourceConfig2;
  /** Do not automatically backfill any objects. */
  backfillNone?: Record<string, unknown>;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. Errors on the Stream. */
  errors?: Error[];
  /**
   * Automatically backfill objects included in the stream source configuration. Specific objects
   * can be excluded.
   */
  backfillAll?: BackfillAllStrategy1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamSchema: Schema<Stream> = s.object<Stream>(
  {
    customerManagedEncryptionKey: s.optional(s.string()),
    destinationConfig: s.optional(s.lazy(() => destinationConfig2Schema)),
    lastRecoveryTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.lazy(() => state1Schema)),
    createTime: s.optional(s.string()),
    satisfiesPzs: s.optional(s.boolean()),
    satisfiesPzi: s.optional(s.boolean()),
    ruleSets: s.optional(s.array(s.lazy(() => ruleSetSchema))),
    displayName: s.optional(s.string()),
    sourceConfig: s.optional(s.lazy(() => sourceConfig2Schema)),
    backfillNone: s.optional(s.record(s.string(), s.unknown())),
    labels: s.optional(s.record(s.string(), s.string())),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    backfillAll: s.optional(s.lazy(() => backfillAllStrategy1Schema)),
  },
  { additionalProperties: s.json() },
);
