import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a VCS Branch being merged. */
export type HistoryActionBranchMerge = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The name of the VCS Branch that was pushed */
  name: string;
  /** The URL from the provider of the VCS Branch that was pushed */
  url: string;
  /** The action of the entity referenced. @default "merge" */
  action?: "merge";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionBranchMergeSchema: Schema<HistoryActionBranchMerge> =
  s.object<HistoryActionBranchMerge>(
    {
      id: s.int(),
      entityType: s.string(),
      name: s.string(),
      url: s.string(),
      action: s.defaulted(s.literal("merge"), "merge"),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
