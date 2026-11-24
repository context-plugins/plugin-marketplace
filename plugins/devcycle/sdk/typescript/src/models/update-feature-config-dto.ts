import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import {
  updateTargetDtoInternalSchema,
  updateTargetDtoSchema,
  type UpdateTargetDto,
} from "./update-target-dto.js";

export type UpdateFeatureConfigDto = {
  /** Status of the Feature Configuration */
  status?: Status;
  /** The targets to evaluate what variation a user should be delivered */
  targets?: UpdateTargetDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateFeatureConfigDtoProperties: s.Shape<UpdateFeatureConfigDto> = {
  status: s.optional(s.lazy(() => statusSchema)),
  targets: s.optional(s.array(s.lazy(() => updateTargetDtoInternalSchema))),
};

export const updateFeatureConfigDtoInternalSchema: Schema<UpdateFeatureConfigDto> =
  s.object<UpdateFeatureConfigDto>(updateFeatureConfigDtoProperties, { additionalProperties: s.json() });

export const updateFeatureConfigDtoSchema: Schema<UpdateFeatureConfigDto> = s.lazySchema(() =>
  s.object<UpdateFeatureConfigDto>(
    {
      ...updateFeatureConfigDtoProperties,
      targets: s.optional(s.array(s.lazy(() => updateTargetDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
