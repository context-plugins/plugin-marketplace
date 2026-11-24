import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiTestConnectionRequestDto = {
  configurationFileContents: string;
  runnerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiTestConnectionRequestDtoSchema: Schema<PublicApiTestConnectionRequestDto> =
  s.object<PublicApiTestConnectionRequestDto>(
    {
      configurationFileContents: s.string(),
      runnerId: s.string(),
    },
    { additionalProperties: s.json() },
  );
