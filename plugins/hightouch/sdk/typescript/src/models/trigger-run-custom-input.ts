import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The input of a trigger action to run syncs based on sync ID, slug or other filters */
export type TriggerRunCustomInput = {
  /** Trigger run based on sync slug */
  syncSlug?: string;
  /** Trigger run based on sync id */
  syncId?: string;
  /**
   * Whether to clear the audience and then sync the full query to the destination
   *
   * @default false
   */
  clearAndFill?: boolean;
  /**
   * Whether to sync all the rows in the query without executing changes on the destination.
   *
   * @default false
   */
  resetCdc?: boolean;
  /**
   * Whether to resync all the rows in the query (i.e. ignoring previously synced rows).
   *
   * @default false
   */
  fullResync?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const triggerRunCustomInputProperties: s.Shape<TriggerRunCustomInput> = {
  syncSlug: s.optional(s.string()),
  syncId: s.optional(s.string()),
  clearAndFill: s.defaulted(s.boolean(), false),
  resetCdc: s.defaulted(s.boolean(), false),
  fullResync: s.defaulted(s.boolean(), false),
  _keysMap: {
    resetCdc: "resetCDC",
  },
};

export const triggerRunCustomInputInternalSchema: Schema<TriggerRunCustomInput> =
  s.object<TriggerRunCustomInput>(triggerRunCustomInputProperties, { additionalProperties: s.json() });

export const triggerRunCustomInputSchema: Schema<TriggerRunCustomInput> = s.lazySchema(() =>
  s.object<TriggerRunCustomInput>(
    {
      ...triggerRunCustomInputProperties,
      syncId: s.optional(s.string().check(s.pattern("^[0-9]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
