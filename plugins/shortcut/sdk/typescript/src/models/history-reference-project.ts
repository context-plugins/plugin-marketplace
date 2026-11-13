import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to an Project. */
export type HistoryReferenceProject = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The application URL of the Project. */
  appUrl: string;
  /** The name of the entity referenced. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyReferenceProjectProperties: s.Shape<HistoryReferenceProject> = {
  id: idSchema,
  entityType: s.string(),
  appUrl: s.string(),
  name: s.string(),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
  },
};

export const historyReferenceProjectInternalSchema: Schema<HistoryReferenceProject> =
  s.object<HistoryReferenceProject>(historyReferenceProjectProperties, { additionalProperties: s.json() });

export const historyReferenceProjectSchema: Schema<HistoryReferenceProject> = s.lazySchema(() =>
  s.object<HistoryReferenceProject>(
    {
      ...historyReferenceProjectProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
