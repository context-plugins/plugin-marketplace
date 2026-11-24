import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audiencePatchActionSchema, type AudiencePatchAction } from "./audience-patch-action.js";
import { opSchema, type Op } from "./op.js";

export type AudiencePatchInstructionsDto = {
  op: Op;
  action: AudiencePatchAction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audiencePatchInstructionsDtoSchema: Schema<AudiencePatchInstructionsDto> =
  s.object<AudiencePatchInstructionsDto>(
    {
      op: opSchema,
      action: audiencePatchActionSchema,
    },
    { additionalProperties: s.json() },
  );
