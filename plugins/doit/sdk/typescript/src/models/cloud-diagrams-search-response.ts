import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramComponentSearchItemSchema,
  type CloudDiagramComponentSearchItem,
} from "./cloud-diagram-component-search-item.js";
import {
  cloudDiagramSchemeSearchItemSchema,
  type CloudDiagramSchemeSearchItem,
} from "./cloud-diagram-scheme-search-item.js";

/** Search results grouped into three categories. */
export type CloudDiagramsSearchResponse = {
  /** Diagram layers (cloud accounts) matching the query. */
  scheme?: CloudDiagramSchemeSearchItem[];
  /** Components matching the query by name. */
  component?: CloudDiagramComponentSearchItem[];
  /** Components matching the query by property values. */
  prop?: CloudDiagramComponentSearchItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramsSearchResponseSchema: Schema<CloudDiagramsSearchResponse> =
  s.object<CloudDiagramsSearchResponse>(
    {
      scheme: s.optional(s.array(s.lazy(() => cloudDiagramSchemeSearchItemSchema))),
      component: s.optional(s.array(s.lazy(() => cloudDiagramComponentSearchItemSchema))),
      prop: s.optional(s.array(s.lazy(() => cloudDiagramComponentSearchItemSchema))),
    },
    { additionalProperties: s.json() },
  );
