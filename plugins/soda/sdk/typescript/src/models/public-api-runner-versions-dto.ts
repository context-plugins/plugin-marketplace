import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiRunnerVersionsDto = {
  /**
   * @deprecated
   */
  agent?: string;
  library?: string;
  runner?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRunnerVersionsDtoSchema: Schema<PublicApiRunnerVersionsDto> =
  s.object<PublicApiRunnerVersionsDto>(
    {
      agent: s.optional(s.string()),
      library: s.optional(s.string()),
      runner: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
