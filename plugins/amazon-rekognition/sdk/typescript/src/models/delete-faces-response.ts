import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  unsuccessfulFaceDeletionSchema,
  type UnsuccessfulFaceDeletion,
} from "./unsuccessful-face-deletion.js";

export type DeleteFacesResponse = {
  /** An array of strings (face IDs) of the faces that were deleted. */
  deletedFaces?: string[];
  /** An array of any faces that weren't deleted. */
  unsuccessfulFaceDeletions?: UnsuccessfulFaceDeletion[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteFacesResponseSchema: Schema<DeleteFacesResponse> = s.object<DeleteFacesResponse>(
  {
    deletedFaces: s.optional(s.array(s.string())),
    unsuccessfulFaceDeletions: s.optional(s.array(s.lazy(() => unsuccessfulFaceDeletionSchema))),
    _keysMap: {
      deletedFaces: "DeletedFaces",
      unsuccessfulFaceDeletions: "UnsuccessfulFaceDeletions",
    },
  },
  { additionalProperties: s.json() },
);
