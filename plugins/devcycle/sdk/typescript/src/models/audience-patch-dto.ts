import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audiencePatchInstructionsDtoSchema,
  type AudiencePatchInstructionsDto,
} from "./audience-patch-instructions-dto.js";

export type AudiencePatchDto = {
  instructions: AudiencePatchInstructionsDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audiencePatchDtoSchema: Schema<AudiencePatchDto> = s.object<AudiencePatchDto>(
  {
    instructions: s.array(s.lazy(() => audiencePatchInstructionsDtoSchema)),
  },
  { additionalProperties: s.json() },
);
