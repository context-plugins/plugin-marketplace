import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The author who made the push */
export type CompassPushEventAuthorInputDto = {
  /** The name of the author. */
  name?: string | null;
  /** The email of the author. */
  email?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassPushEventAuthorInputDtoSchema: Schema<CompassPushEventAuthorInputDto> =
  s.object<CompassPushEventAuthorInputDto>(
    {
      name: s.optionalNullable(s.string()),
      email: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
