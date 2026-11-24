import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotationUrlCitationSchema, type AnnotationUrlCitation } from "./annotation-url-citation.js";

export type ResponseOutputTextAnnotationAddedEvent = {
  /** A citation for a web resource used to generate a model response. */
  annotation: AnnotationUrlCitation;
  annotationIndex: number;
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  /** @default "response.output_text.annotation.added" */
  type?: "response.output_text.annotation.added";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOutputTextAnnotationAddedEventSchema: Schema<ResponseOutputTextAnnotationAddedEvent> =
  s.object<ResponseOutputTextAnnotationAddedEvent>(
    {
      annotation: annotationUrlCitationSchema,
      annotationIndex: s.int(),
      contentIndex: s.int(),
      itemId: s.string(),
      outputIndex: s.int(),
      sequenceNumber: s.int(),
      type: s.defaulted(
        s.literal("response.output_text.annotation.added"),
        "response.output_text.annotation.added",
      ),
      _keysMap: {
        annotationIndex: "annotation_index",
        contentIndex: "content_index",
        itemId: "item_id",
        outputIndex: "output_index",
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
