import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassIncidentEventSeverityInputDtoSchema,
  type CompassIncidentEventSeverityInputDto,
} from "./compass-incident-event-severity-input-dto.js";
import { stateSchema, type State } from "./state.js";

/** The list of properties of the incident event. */
export type CompassCreateIncidentEventPropertiesInputDto = {
  /** The ID of the incident. */
  id: string;
  /** The state of the incident. */
  state: State;
  /** The severity of the incident */
  severity?: CompassIncidentEventSeverityInputDto | null;
  /** The time when the incident started */
  startTime: Date;
  /** The time when the incident ended */
  endTime?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateIncidentEventPropertiesInputDtoSchema: Schema<CompassCreateIncidentEventPropertiesInputDto> =
  s.object<CompassCreateIncidentEventPropertiesInputDto>(
    {
      id: s.string(),
      state: stateSchema,
      severity: s.optionalNullable(s.lazy(() => compassIncidentEventSeverityInputDtoSchema)),
      startTime: s.dateTime(),
      endTime: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
