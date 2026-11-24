import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { glossaryConfig1Schema, type GlossaryConfig1 } from "./glossary-config1.js";
import {
  referenceSentenceConfig1Schema,
  type ReferenceSentenceConfig1,
} from "./reference-sentence-config1.js";

/** The request for sending an AdaptiveMt translation query. */
export type AdaptiveMtTranslateRequest = {
  /**
   * Optional. Glossary to be applied. The glossary must be within the same region (have the same
   * location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  glossaryConfig?: GlossaryConfig1;
  /** The format of the source text. Currently only text/plain is supported. */
  mimeType?: string;
  /**
   * Required. The resource name for the dataset to use for adaptive MT translation.
   * `projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}`
   */
  dataset?: string;
  /** Configuration for caller provided reference sentences. */
  referenceSentenceConfig?: ReferenceSentenceConfig1;
  /** Required. The content of the input in string format. */
  content?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtTranslateRequestSchema: Schema<AdaptiveMtTranslateRequest> =
  s.object<AdaptiveMtTranslateRequest>(
    {
      glossaryConfig: s.optional(s.lazy(() => glossaryConfig1Schema)),
      mimeType: s.optional(s.string()),
      dataset: s.optional(s.string()),
      referenceSentenceConfig: s.optional(s.lazy(() => referenceSentenceConfig1Schema)),
      content: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
