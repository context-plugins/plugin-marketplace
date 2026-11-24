import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudDiagramImportStateSchema, type CloudDiagramImportState } from "./cloud-diagram-import-state.js";

/**
 * Projected layer metadata returned inside each layer entry. Contains import state, last updated
 * timestamp, and links version.
 */
export type CloudDiagramStatussheetMeta = {
  /** Layer ID. */
  id: string;
  /** Current import/sync state for a cloud-connected diagram. */
  import?: CloudDiagramImportState;
  /** Timestamp of the last update. */
  updatedAt: Date;
  /** Links version counter, incremented on every link change. */
  linksVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramStatussheetMetaSchema: Schema<CloudDiagramStatussheetMeta> =
  s.object<CloudDiagramStatussheetMeta>(
    {
      id: s.string(),
      import: s.optional(s.lazy(() => cloudDiagramImportStateSchema)),
      updatedAt: s.dateTime(),
      linksVersion: s.optional(s.int()),
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
