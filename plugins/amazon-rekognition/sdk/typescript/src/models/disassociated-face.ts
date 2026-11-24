import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociatedFace = {
  /** Unique identifier assigned to the face. */
  faceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociatedFaceSchema: Schema<DisassociatedFace> = s.object<DisassociatedFace>(
  {
    faceId: s.optional(s.string()),
    _keysMap: {
      faceId: "FaceId",
    },
  },
  { additionalProperties: s.json() },
);
