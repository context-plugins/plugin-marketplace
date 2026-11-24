import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassBuildEventPipelineInputDtoSchema,
  type CompassBuildEventPipelineInputDto,
} from "./compass-build-event-pipeline-input-dto.js";
import { state2Schema, type State2 } from "./state2.js";

/** The list of properties of the build event. */
export type CompassBuildEventPropertiesInputDto = {
  /** The state of the build. */
  state: State2;
  /** The build event pipeline. */
  pipeline: CompassBuildEventPipelineInputDto;
  /** The time the build started. */
  startedAt: Date;
  /** The time the build completed. */
  completedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassBuildEventPropertiesInputDtoSchema: Schema<CompassBuildEventPropertiesInputDto> =
  s.object<CompassBuildEventPropertiesInputDto>(
    {
      state: state2Schema,
      pipeline: compassBuildEventPipelineInputDtoSchema,
      startedAt: s.dateTime(),
      completedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
