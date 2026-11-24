import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramSchemeResultSchema,
  type CloudDiagramSchemeResult,
} from "./cloud-diagram-scheme-result.js";
import {
  cloudDiagramStatussheetDataSchema,
  type CloudDiagramStatussheetData,
} from "./cloud-diagram-statussheet-data.js";

/**
 * Diagram and layer data. When called with an empty body, only the diagram map is populated. When
 * called with a populated body, both diagram and layer maps are returned with components projected
 * to key display and cloud fields by default.
 */
export type CloudDiagramsGetResponse = {
  /** Map of diagram ID to diagram with its connected cloud accounts. */
  scheme?: Record<string, CloudDiagramSchemeResult>;
  /**
   * Map of layer ID to layer metadata and component collections. Components are projected to key
   * display and cloud fields by default.
   */
  statussheet?: Record<string, CloudDiagramStatussheetData>;
  /** Map of template layer ID to template data. */
  template?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramsGetResponseSchema: Schema<CloudDiagramsGetResponse> =
  s.object<CloudDiagramsGetResponse>(
    {
      scheme: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramSchemeResultSchema),
        ),
      ),
      statussheet: s.optional(
        s.record(
          s.string(),
          s.lazy(() => cloudDiagramStatussheetDataSchema),
        ),
      ),
      template: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
