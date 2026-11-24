import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiRcaResourceRefDtoSchema,
  type PublicApiRcaResourceRefDto,
} from "./public-api-rca-resource-ref-dto.js";
import { rcaNodeStatusDtoSchema, type RcaNodeStatusDto } from "./rca-node-status-dto.js";

export type PublicApiRcaLineageNodeDto = {
  id: string;
  incidentAsset?: boolean;
  name: string;
  namespace?: string;
  platform?: string;
  sodaResource?: PublicApiRcaResourceRefDto;
  status?: RcaNodeStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaLineageNodeDtoSchema: Schema<PublicApiRcaLineageNodeDto> =
  s.object<PublicApiRcaLineageNodeDto>(
    {
      id: s.string(),
      incidentAsset: s.optional(s.boolean()),
      name: s.string(),
      namespace: s.optional(s.string()),
      platform: s.optional(s.string()),
      sodaResource: s.optional(s.lazy(() => publicApiRcaResourceRefDtoSchema)),
      status: s.optional(s.lazy(() => rcaNodeStatusDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
