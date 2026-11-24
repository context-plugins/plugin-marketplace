import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The build event pipeline. */
export type CompassBuildEventPipelineInputDto = {
  /**
   * The ID of the build event pipeline should be unique per build event. Otherwise, any existing
   * event with a matching value will be overwritten.
   */
  pipelineId: string;
  /** The URL to the build event pipeline. */
  url?: string | null;
  /** The name of the build event pipeline. */
  displayName?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassBuildEventPipelineInputDtoSchema: Schema<CompassBuildEventPipelineInputDto> =
  s.object<CompassBuildEventPipelineInputDto>(
    {
      pipelineId: s.string(),
      url: s.optionalNullable(s.string()),
      displayName: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
