import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AllowedInputTypes = {
  /** Indicates whether audio input is allowed. */
  allowAudioInput: boolean;
  /** Indicates whether DTMF input is allowed. */
  allowDtmfInput: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allowedInputTypesSchema: Schema<AllowedInputTypes> = s.object<AllowedInputTypes>(
  {
    allowAudioInput: s.boolean(),
    allowDtmfInput: s.boolean(),
    _keysMap: {
      allowDtmfInput: "allowDTMFInput",
    },
  },
  { additionalProperties: s.json() },
);
