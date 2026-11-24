import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { librarySchema, type Library } from "./library.js";

export type LibraryList = {
  libraries: Library[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const libraryListSchema: Schema<LibraryList> = s.object<LibraryList>(
  {
    libraries: s.array(s.lazy(() => librarySchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
