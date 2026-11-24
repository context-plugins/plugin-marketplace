import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commonNameFilterSchema, type CommonNameFilter } from "./common-name-filter.js";

/** Exactly one member is set. */
export type SubjectFilter = {
  commonName?: CommonNameFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subjectFilterSchema: Schema<SubjectFilter> = s.object<SubjectFilter>(
  {
    commonName: s.optional(s.lazy(() => commonNameFilterSchema)),
    _keysMap: {
      commonName: "CommonName",
    },
  },
  { additionalProperties: s.json() },
);
