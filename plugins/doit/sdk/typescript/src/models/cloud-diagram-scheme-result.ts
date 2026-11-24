import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramSchemeStatussheetInfoSchema,
  type CloudDiagramSchemeStatussheetInfo,
} from "./cloud-diagram-scheme-statussheet-info.js";
import { type9Schema, type Type9 } from "./type9.js";

/** A diagram with its connected cloud accounts. */
export type CloudDiagramSchemeResult = {
  /** Diagram ID. */
  id: string;
  /** Diagram name. */
  name: string;
  /** Diagram color. */
  color?: string;
  /** Diagram type. */
  type: Type9;
  /** Connected cloud accounts (layers). */
  statussheet: CloudDiagramSchemeStatussheetInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramSchemeResultSchema: Schema<CloudDiagramSchemeResult> =
  s.object<CloudDiagramSchemeResult>(
    {
      id: s.string(),
      name: s.string(),
      color: s.optional(s.string()),
      type: type9Schema,
      statussheet: s.array(s.lazy(() => cloudDiagramSchemeStatussheetInfoSchema)),
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
