import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassCreateDeploymentEventPropertiesInputDtoSchema,
  type CompassCreateDeploymentEventPropertiesInputDto,
} from "./compass-create-deployment-event-properties-input-dto.js";

/** A deployment event. */
export type CompassCreateDeploymentEventInputDto = {
  /** The name of the deployment event. */
  displayName: string;
  /**
   * A number specifying the order of the update to the event. Must be incremented to save new
   * events. Otherwise, the request will be ignored.
   */
  updateSequenceNumber: number;
  /** The URL of the deployment event. */
  url: string;
  /** The description of the deployment event. */
  description: string;
  /** The last time this event was updated. */
  lastUpdated: Date;
  /** The ID of the external event source. */
  externalEventSourceId: string;
  /** The list of properties of the deployment event. */
  deploymentProperties: CompassCreateDeploymentEventPropertiesInputDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateDeploymentEventInputDtoSchema: Schema<CompassCreateDeploymentEventInputDto> =
  s.object<CompassCreateDeploymentEventInputDto>(
    {
      displayName: s.string(),
      updateSequenceNumber: s.int(),
      url: s.string(),
      description: s.string(),
      lastUpdated: s.dateTime(),
      externalEventSourceId: s.string(),
      deploymentProperties: compassCreateDeploymentEventPropertiesInputDtoSchema,
    },
    { additionalProperties: s.json() },
  );
