import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";
import { faceSchema, type Face } from "./face.js";

export type FaceRecord = {
  face?: Face;
  faceDetail?: FaceDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceRecordSchema: Schema<FaceRecord> = s.object<FaceRecord>(
  {
    face: s.optional(s.lazy(() => faceSchema)),
    faceDetail: s.optional(s.lazy(() => faceDetailSchema)),
    _keysMap: {
      face: "Face",
      faceDetail: "FaceDetail",
    },
  },
  { additionalProperties: s.json() },
);
