import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateDynatraceIntegrationDto = {
  dynatraceEnvironmentId: string;
  accessToken: string;
  environmentUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDynatraceIntegrationDtoSchema: Schema<CreateDynatraceIntegrationDto> =
  s.object<CreateDynatraceIntegrationDto>(
    {
      dynatraceEnvironmentId: s.string(),
      accessToken: s.string(),
      environmentUrl: s.string(),
    },
    { additionalProperties: s.json() },
  );
