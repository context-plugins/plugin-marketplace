import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The input of a trigger action to run syncs */
export type TriggerRunInput = {
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

export const triggerRunInputSchema: Schema<TriggerRunInput> = s.object<TriggerRunInput>(
  {
    clearAndFill: s.defaulted(s.boolean(), false),
    resetCdc: s.defaulted(s.boolean(), false),
    fullResync: s.defaulted(s.boolean(), false),
    _keysMap: {
      resetCdc: "resetCDC",
    },
  },
  { additionalProperties: s.json() },
);
