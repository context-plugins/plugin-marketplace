import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateFeatureChangeRequestDto = {
  path: string;
  /** @default "PATCH" */
  method?: "PATCH";
  body: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFeatureChangeRequestDtoSchema: Schema<CreateFeatureChangeRequestDto> =
  s.object<CreateFeatureChangeRequestDto>(
    {
      path: s.string(),
      method: s.defaulted(s.literal("PATCH"), "PATCH"),
      body: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
