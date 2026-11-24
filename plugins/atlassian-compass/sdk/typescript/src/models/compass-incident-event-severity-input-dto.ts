import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { levelSchema, type Level } from "./level.js";

/** The severity of an incident */
export type CompassIncidentEventSeverityInputDto = {
  /** The label to use for displaying the severity of the incident */
  label?: string | null;
  /**
   * The severity level. A severity level of 'ONE' is the most severe, and a level of 'FIVE' is the
   * least severe.
   */
  level?: Level | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassIncidentEventSeverityInputDtoSchema: Schema<CompassIncidentEventSeverityInputDto> =
  s.object<CompassIncidentEventSeverityInputDto>(
    {
      label: s.optionalNullable(s.string()),
      level: s.optionalNullable(s.lazy(() => levelSchema)),
    },
    { additionalProperties: s.json() },
  );
