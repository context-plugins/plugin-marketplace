import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconSchema, type Icon } from "./icon.js";

/** The list of properties of the custom event. */
export type CompassCustomEventPropertiesInputDto = {
  /** The ID of the custom event. */
  id: string;
  /** The icon for the custom event. */
  icon: Icon;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCustomEventPropertiesInputDtoSchema: Schema<CompassCustomEventPropertiesInputDto> =
  s.object<CompassCustomEventPropertiesInputDto>(
    {
      id: s.string(),
      icon: iconSchema,
    },
    { additionalProperties: s.json() },
  );
