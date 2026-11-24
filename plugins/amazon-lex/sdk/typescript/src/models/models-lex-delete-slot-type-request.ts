import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteSlotTypeRequest = {
  /** The name of the slot type. The name is case sensitive. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteSlotTypeRequestSchema: Schema<ModelsLexDeleteSlotTypeRequest> =
  s.object<ModelsLexDeleteSlotTypeRequest>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
