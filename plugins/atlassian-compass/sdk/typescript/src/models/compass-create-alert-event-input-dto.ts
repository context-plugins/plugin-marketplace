import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassAlertEventPropertiesInputDtoSchema,
  type CompassAlertEventPropertiesInputDto,
} from "./compass-alert-event-properties-input-dto.js";

/** An alert event. */
export type CompassCreateAlertEventInputDto = {
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
  /** The list of properties of the alert event. */
  alertProperties: CompassAlertEventPropertiesInputDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateAlertEventInputDtoSchema: Schema<CompassCreateAlertEventInputDto> =
  s.object<CompassCreateAlertEventInputDto>(
    {
      displayName: s.string(),
      lastUpdated: s.dateTime(),
      updateSequenceNumber: s.int(),
      description: s.string(),
      url: s.string(),
      externalEventSourceId: s.string(),
      alertProperties: compassAlertEventPropertiesInputDtoSchema,
    },
    { additionalProperties: s.json() },
  );
