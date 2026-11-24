import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetSlotTypeRequest = {
  /** The name of the slot type. The name is case sensitive. */
  name: string;
  /** The version of the slot type. */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSlotTypeRequestSchema: Schema<GetSlotTypeRequest> = s.object<GetSlotTypeRequest>(
  {
    name: s.string(),
    version: s.string(),
  },
  { additionalProperties: s.json() },
);
