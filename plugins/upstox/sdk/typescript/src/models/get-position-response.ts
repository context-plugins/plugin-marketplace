import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { positionDataSchema, type PositionData } from "./position-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetPositionResponse = {
  status?: Status;
  /** Response data for position details */
  data?: PositionData[];
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getPositionResponseSchema: Schema<GetPositionResponse> = s.object<GetPositionResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => positionDataSchema))),
    metadata: s.optional(s.lazy(() => orderMetadataSchema)),
  },
  { additionalProperties: s.json() },
);
