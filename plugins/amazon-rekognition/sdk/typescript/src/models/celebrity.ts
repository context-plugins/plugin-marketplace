import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparedFaceSchema, type ComparedFace } from "./compared-face.js";
import { knownGenderSchema, type KnownGender } from "./known-gender.js";

export type Celebrity = {
  /**
   * An array of URLs pointing to additional information about the celebrity. If there is no
   * additional information about the celebrity, this list is empty.
   */
  urls?: string[];
  /** The name of the celebrity. */
  name?: string;
  /** A unique identifier for the celebrity. */
  id?: string;
  face?: ComparedFace;
  /**
   * The confidence, in percentage, that Amazon Rekognition has that the recognized face is the
   * celebrity.
   */
  matchConfidence?: number;
  knownGender?: KnownGender;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const celebritySchema: Schema<Celebrity> = s.object<Celebrity>(
  {
    urls: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    id: s.optional(s.string()),
    face: s.optional(s.lazy(() => comparedFaceSchema)),
    matchConfidence: s.optional(s.float64()),
    knownGender: s.optional(s.lazy(() => knownGenderSchema)),
    _keysMap: {
      urls: "Urls",
      name: "Name",
      id: "Id",
      face: "Face",
      matchConfidence: "MatchConfidence",
      knownGender: "KnownGender",
    },
  },
  { additionalProperties: s.json() },
);
