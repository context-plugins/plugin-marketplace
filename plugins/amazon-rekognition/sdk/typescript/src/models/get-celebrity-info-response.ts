import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { knownGenderSchema, type KnownGender } from "./known-gender.js";

export type GetCelebrityInfoResponse = {
  /** An array of URLs pointing to additional celebrity information. */
  urls?: string[];
  /** The name of the celebrity. */
  name?: string;
  knownGender?: KnownGender;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCelebrityInfoResponseSchema: Schema<GetCelebrityInfoResponse> =
  s.object<GetCelebrityInfoResponse>(
    {
      urls: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      knownGender: s.optional(s.lazy(() => knownGenderSchema)),
      _keysMap: {
        urls: "Urls",
        name: "Name",
        knownGender: "KnownGender",
      },
    },
    { additionalProperties: s.json() },
  );
