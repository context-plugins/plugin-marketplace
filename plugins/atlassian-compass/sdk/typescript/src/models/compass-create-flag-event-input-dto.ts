import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassCreateFlagEventPropertiesInputDtoSchema,
  type CompassCreateFlagEventPropertiesInputDto,
} from "./compass-create-flag-event-properties-input-dto.js";

/** A flag event. */
export type CompassCreateFlagEventInputDto = {
  /** The name of the event. */
  displayName: string;
  /** The last time this event was updated. */
  lastUpdated: Date;
  /**
   * A number specifying the order of the update to the event. Must be incremented to save new
   * events. Otherwise, the request will be ignored.
   */
  updateSequenceNumber: number;
  /** The description of the event. */
  description: string;
  /** The URL of the event. */
  url: string;
  /** The ID of the external event source. */
  externalEventSourceId: string;
  /** The list of properties of the flag event. */
  flagProperties: CompassCreateFlagEventPropertiesInputDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateFlagEventInputDtoSchema: Schema<CompassCreateFlagEventInputDto> =
  s.object<CompassCreateFlagEventInputDto>(
    {
      displayName: s.string(),
      lastUpdated: s.dateTime(),
      updateSequenceNumber: s.int(),
      description: s.string(),
      url: s.string(),
      externalEventSourceId: s.string(),
      flagProperties: compassCreateFlagEventPropertiesInputDtoSchema,
    },
    { additionalProperties: s.json() },
  );
