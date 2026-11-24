import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { threeDsActionTypeSchema, type ThreeDsActionType } from "./three-ds-action-type.js";

/** ThreeDsRequestDto represents a request for 3D Secure actions. */
export type ThreeDsRequestDto = {
  action: ThreeDsActionType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threeDsRequestDtoSchema: Schema<ThreeDsRequestDto> = s.object<ThreeDsRequestDto>(
  {
    action: threeDsActionTypeSchema,
  },
  { additionalProperties: s.json() },
);
