import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status4Schema, type Status4 } from "./status4.js";

export type UpdateFeatureStatusDto = {
  /** The status to set the Feature's status to */
  status?: Status4;
  /** The ID of the custom status to set the Feature's status to */
  customStatus?: string;
  /** The variation key or ID to serve if the status is set to complete */
  staticVariation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFeatureStatusDtoSchema: Schema<UpdateFeatureStatusDto> = s.object<UpdateFeatureStatusDto>(
  {
    status: s.optional(s.lazy(() => status4Schema)),
    customStatus: s.optional(s.string()),
    staticVariation: s.optional(s.string()),
    _keysMap: {
      customStatus: "_customStatus",
    },
  },
  { additionalProperties: s.json() },
);
