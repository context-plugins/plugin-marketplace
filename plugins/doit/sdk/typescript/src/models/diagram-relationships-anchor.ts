import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1DoiTCloudDiagramsApiSchema,
  type Type1DoiTCloudDiagramsApi,
} from "./type1-doi-tcloud-diagrams-api.js";

/** The anchor resource the traversal started from. */
export type DiagramRelationshipsAnchor = {
  /** Anchor resource ID (matches the `rid` path parameter). */
  id: string;
  /** Component bucket the anchor lives in. */
  type: Type1DoiTCloudDiagramsApi;
  /** Human-readable resource name. */
  name: string;
  /** Cloud service type when available (e.g. `Amazon RDS`, `GCP Cloud SQL`). */
  serviceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const diagramRelationshipsAnchorSchema: Schema<DiagramRelationshipsAnchor> =
  s.object<DiagramRelationshipsAnchor>(
    {
      id: s.string(),
      type: type1DoiTCloudDiagramsApiSchema,
      name: s.string(),
      serviceType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
