import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

/** The environment where the deployment event has occurred. */
export type CompassDeploymentEventEnvironmentInputDto = {
  /** The type of environment where the deployment event occurred. */
  category: Category;
  /** The display name of the environment where the deployment event occurred. */
  displayName: string;
  /** The ID of the environment where the deployment event occurred. */
  environmentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassDeploymentEventEnvironmentInputDtoSchema: Schema<CompassDeploymentEventEnvironmentInputDto> =
  s.object<CompassDeploymentEventEnvironmentInputDto>(
    {
      category: categorySchema,
      displayName: s.string(),
      environmentId: s.string(),
    },
    { additionalProperties: s.json() },
  );
