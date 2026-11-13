import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Project being updated. */
export type HistoryActionProjectUpdate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "update" */
  action?: "update";
  /** The application URL of the Project. */
  appUrl: string;
  /** The name of the Project. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionProjectUpdateProperties: s.Shape<HistoryActionProjectUpdate> = {
  id: s.int(),
  entityType: s.string(),
  action: s.defaulted(s.literal("update"), "update"),
  appUrl: s.string(),
  name: s.string(),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
  },
};

export const historyActionProjectUpdateInternalSchema: Schema<HistoryActionProjectUpdate> =
  s.object<HistoryActionProjectUpdate>(historyActionProjectUpdateProperties, {
    additionalProperties: s.json(),
  });

export const historyActionProjectUpdateSchema: Schema<HistoryActionProjectUpdate> = s.lazySchema(() =>
  s.object<HistoryActionProjectUpdate>(
    {
      ...historyActionProjectUpdateProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
