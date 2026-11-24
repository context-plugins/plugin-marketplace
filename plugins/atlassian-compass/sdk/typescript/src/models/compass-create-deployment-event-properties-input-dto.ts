import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassDeploymentEventEnvironmentInputDtoSchema,
  type CompassDeploymentEventEnvironmentInputDto,
} from "./compass-deployment-event-environment-input-dto.js";
import {
  compassDeploymentEventPipelineInputDtoSchema,
  type CompassDeploymentEventPipelineInputDto,
} from "./compass-deployment-event-pipeline-input-dto.js";
import { state1Schema, type State1 } from "./state1.js";

/** The list of properties of the deployment event. */
export type CompassCreateDeploymentEventPropertiesInputDto = {
  /** The sequence number for the deployment. */
  sequenceNumber: number;
  /** The state of the deployment. */
  state: State1;
  /** The deployment event pipeline. */
  pipeline: CompassDeploymentEventPipelineInputDto;
  /** The environment where the deployment event has occurred. */
  environment: CompassDeploymentEventEnvironmentInputDto;
  /** The time this deployment was started at. */
  startedAt?: Date | null;
  /** The time this deployment was completed at. */
  completedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateDeploymentEventPropertiesInputDtoSchema: Schema<CompassCreateDeploymentEventPropertiesInputDto> =
  s.object<CompassCreateDeploymentEventPropertiesInputDto>(
    {
      sequenceNumber: s.int(),
      state: state1Schema,
      pipeline: compassDeploymentEventPipelineInputDtoSchema,
      environment: compassDeploymentEventEnvironmentInputDtoSchema,
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
