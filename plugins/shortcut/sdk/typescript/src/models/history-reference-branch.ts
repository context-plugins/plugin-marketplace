import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to a VCS Branch. */
export type HistoryReferenceBranch = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The name of the entity referenced. */
  name: string;
  /** The external URL for the Branch. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyReferenceBranchProperties: s.Shape<HistoryReferenceBranch> = {
  id: idSchema,
  entityType: s.string(),
  name: s.string(),
  url: s.string(),
  _keysMap: {
    entityType: "entity_type",
  },
};

export const historyReferenceBranchInternalSchema: Schema<HistoryReferenceBranch> =
  s.object<HistoryReferenceBranch>(historyReferenceBranchProperties, { additionalProperties: s.json() });

export const historyReferenceBranchSchema: Schema<HistoryReferenceBranch> = s.lazySchema(() =>
  s.object<HistoryReferenceBranch>(
    {
      ...historyReferenceBranchProperties,
      url: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
