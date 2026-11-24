import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { template1Schema, type Template1 } from "./unions/template1.js";

/**
 * Request body for getting diagram components. Leave empty to retrieve all accessible diagrams
 * (returns scheme map only).
 */
export type CloudDiagramsGetRequest = {
  /** IDs of diagrams to load. */
  scheme?: string[];
  /** IDs of layers to load. */
  statussheet?: string[];
  /** Template type or array of template layer IDs to include. */
  template?: Template1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramsGetRequestSchema: Schema<CloudDiagramsGetRequest> =
  s.object<CloudDiagramsGetRequest>(
    {
      scheme: s.optional(s.array(s.string())),
      statussheet: s.optional(s.array(s.string())),
      template: s.optional(s.lazy(() => template1Schema)),
    },
    { additionalProperties: s.json() },
  );
