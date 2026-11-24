import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The deployment event pipeline. */
export type CompassDeploymentEventPipelineInputDto = {
  /** The ID of the deployment event pipeline. */
  pipelineId: string;
  /** The URL of the deployment event pipeline. */
  url: string;
  /** The name of the deployment event pipeline. */
  displayName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassDeploymentEventPipelineInputDtoSchema: Schema<CompassDeploymentEventPipelineInputDto> =
  s.object<CompassDeploymentEventPipelineInputDto>(
    {
      pipelineId: s.string(),
      url: s.string(),
      displayName: s.string(),
    },
    { additionalProperties: s.json() },
  );
