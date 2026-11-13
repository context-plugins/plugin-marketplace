import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Label being created. */
export type HistoryActionLabelCreate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "create" */
  action?: "create";
  /** The application URL of the Label. */
  appUrl: string;
  /** The name of the Label. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionLabelCreateProperties: s.Shape<HistoryActionLabelCreate> = {
  id: s.int(),
  entityType: s.string(),
  action: s.defaulted(s.literal("create"), "create"),
  appUrl: s.string(),
  name: s.string(),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
  },
};

export const historyActionLabelCreateInternalSchema: Schema<HistoryActionLabelCreate> =
  s.object<HistoryActionLabelCreate>(historyActionLabelCreateProperties, { additionalProperties: s.json() });

export const historyActionLabelCreateSchema: Schema<HistoryActionLabelCreate> = s.lazySchema(() =>
  s.object<HistoryActionLabelCreate>(
    {
      ...historyActionLabelCreateProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
