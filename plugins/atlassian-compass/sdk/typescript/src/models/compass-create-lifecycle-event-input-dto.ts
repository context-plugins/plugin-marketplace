import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassLifecycleEventInputPropertiesDtoSchema,
  type CompassLifecycleEventInputPropertiesDto,
} from "./compass-lifecycle-event-input-properties-dto.js";

/** A lifecycle event. */
export type CompassCreateLifecycleEventInputDto = {
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
  /** The list of properties of the lifecycle event. */
  lifecycleProperties: CompassLifecycleEventInputPropertiesDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateLifecycleEventInputDtoSchema: Schema<CompassCreateLifecycleEventInputDto> =
  s.object<CompassCreateLifecycleEventInputDto>(
    {
      displayName: s.string(),
      lastUpdated: s.dateTime(),
      updateSequenceNumber: s.int(),
      description: s.string(),
      url: s.string(),
      externalEventSourceId: s.string(),
      lifecycleProperties: compassLifecycleEventInputPropertiesDtoSchema,
    },
    { additionalProperties: s.json() },
  );
