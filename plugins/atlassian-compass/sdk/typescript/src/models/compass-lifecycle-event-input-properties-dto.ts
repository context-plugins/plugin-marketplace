import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageSchema, type Stage } from "./stage.js";

/** The list of properties of the lifecycle event. */
export type CompassLifecycleEventInputPropertiesDto = {
  /** The ID of the lifecycle. */
  id: string;
  /** The stage of the lifecycle event. */
  stage: Stage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassLifecycleEventInputPropertiesDtoSchema: Schema<CompassLifecycleEventInputPropertiesDto> =
  s.object<CompassLifecycleEventInputPropertiesDto>(
    {
      id: s.string(),
      stage: stageSchema,
    },
    { additionalProperties: s.json() },
  );
