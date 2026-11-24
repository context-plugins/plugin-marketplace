import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The list of properties of the flag event. */
export type CompassCreateFlagEventPropertiesInputDto = {
  /** The ID of the flag. */
  id: string;
  /**
   * The flag's status. The recognized values (case-insensitive) are on, off, created, archived,
   * deleted, and targeting_updated. Any other value, although acceptable, will be displayed as
   * unknown on the activity feed.
   */
  status?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreateFlagEventPropertiesInputDtoSchema: Schema<CompassCreateFlagEventPropertiesInputDto> =
  s.object<CompassCreateFlagEventPropertiesInputDto>(
    {
      id: s.string(),
      status: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
