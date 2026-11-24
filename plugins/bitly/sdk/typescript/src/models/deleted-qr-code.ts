import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeletedQrCode = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deletedQrCodeSchema: Schema<DeletedQrCode> = s.object<DeletedQrCode>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
