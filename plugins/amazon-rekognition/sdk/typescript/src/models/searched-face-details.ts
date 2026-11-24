import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";

export type SearchedFaceDetails = {
  faceDetail?: FaceDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchedFaceDetailsSchema: Schema<SearchedFaceDetails> = s.object<SearchedFaceDetails>(
  {
    faceDetail: s.optional(s.lazy(() => faceDetailSchema)),
    _keysMap: {
      faceDetail: "FaceDetail",
    },
  },
  { additionalProperties: s.json() },
);
