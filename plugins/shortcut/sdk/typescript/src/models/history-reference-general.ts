import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A default reference for entity types that don't have extra fields. */
export type HistoryReferenceGeneral = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The name of the entity referenced. */
  name: string;
};

export const historyReferenceGeneralSchema: Schema<HistoryReferenceGeneral> =
  s.object<HistoryReferenceGeneral>({
    id: idSchema,
    entityType: s.string(),
    name: s.string(),
    _keysMap: {
      entityType: "entity_type",
    },
  });
