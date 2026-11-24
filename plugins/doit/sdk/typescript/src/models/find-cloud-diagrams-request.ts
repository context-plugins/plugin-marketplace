import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for locating cloud diagrams for given resource IDs. */
export type FindCloudDiagramsRequest = {
  /** Resource IDs to find diagrams for. */
  resources: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findCloudDiagramsRequestSchema: Schema<FindCloudDiagramsRequest> =
  s.object<FindCloudDiagramsRequest>(
    {
      resources: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
