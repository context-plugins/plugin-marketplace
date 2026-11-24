import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A citation for a web resource used to generate a model response. */
export type AnnotationUrlCitation = {
  endIndex: number;
  startIndex: number;
  title: string;
  /** @default "url_citation" */
  type?: "url_citation";
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const annotationUrlCitationSchema: Schema<AnnotationUrlCitation> = s.object<AnnotationUrlCitation>(
  {
    endIndex: s.int(),
    startIndex: s.int(),
    title: s.string(),
    type: s.defaulted(s.literal("url_citation"), "url_citation"),
    url: s.string(),
    _keysMap: {
      endIndex: "end_index",
      startIndex: "start_index",
    },
  },
  { additionalProperties: s.json() },
);
