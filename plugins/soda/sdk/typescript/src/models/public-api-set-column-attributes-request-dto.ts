import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiSetColumnAttributesRequestDto = {
  columnAttributes: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiSetColumnAttributesRequestDtoSchema: Schema<PublicApiSetColumnAttributesRequestDto> =
  s.object<PublicApiSetColumnAttributesRequestDto>(
    {
      columnAttributes: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
