import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassCreateIncidentEventPropertiesInputDtoSchema,
  type CompassCreateIncidentEventPropertiesInputDto,
} from "./compass-create-incident-event-properties-input-dto.js";

/** An incident event. */
export type CompassCreateIncidentEventInputDto = {
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
  /** The list of properties of the incident event. */
  incidentProperties: CompassCreateIncidentEventPropertiesInputDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateIncidentEventInputDtoSchema: Schema<CompassCreateIncidentEventInputDto> =
  s.object<CompassCreateIncidentEventInputDto>(
    {
      displayName: s.string(),
      lastUpdated: s.dateTime(),
      updateSequenceNumber: s.int(),
      description: s.string(),
      url: s.string(),
      externalEventSourceId: s.string(),
      incidentProperties: compassCreateIncidentEventPropertiesInputDtoSchema,
    },
    { additionalProperties: s.json() },
  );
