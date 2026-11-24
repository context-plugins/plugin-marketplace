import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiRcaLineageEdgeDtoSchema,
  type PublicApiRcaLineageEdgeDto,
} from "./public-api-rca-lineage-edge-dto.js";
import {
  publicApiRcaLineageNodeDtoSchema,
  type PublicApiRcaLineageNodeDto,
} from "./public-api-rca-lineage-node-dto.js";

export type PublicApiRcaLineageDto = {
  edges?: PublicApiRcaLineageEdgeDto[];
  nodes?: PublicApiRcaLineageNodeDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaLineageDtoSchema: Schema<PublicApiRcaLineageDto> = s.object<PublicApiRcaLineageDto>(
  {
    edges: s.optional(s.array(s.lazy(() => publicApiRcaLineageEdgeDtoSchema))),
    nodes: s.optional(s.array(s.lazy(() => publicApiRcaLineageNodeDtoSchema))),
  },
  { additionalProperties: s.json() },
);
