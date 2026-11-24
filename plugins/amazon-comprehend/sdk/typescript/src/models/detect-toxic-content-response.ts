import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { toxicLabelsSchema, type ToxicLabels } from "./toxic-labels.js";

export type DetectToxicContentResponse = {
  /**
   * Results of the content moderation analysis. Each entry in the results list contains a list of
   * toxic content types identified in the text, along with a confidence score for each content
   * type. The results list also includes a toxicity score for each entry in the results list.
   */
  resultList?: ToxicLabels[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectToxicContentResponseSchema: Schema<DetectToxicContentResponse> =
  s.object<DetectToxicContentResponse>(
    {
      resultList: s.optional(s.array(s.lazy(() => toxicLabelsSchema))),
      _keysMap: {
        resultList: "ResultList",
      },
    },
    { additionalProperties: s.json() },
  );
