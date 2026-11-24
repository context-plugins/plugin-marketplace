import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DataplaneEvaluatetemplateRequest = {
  /**
   * The mapping template; this can be a request or response template. A template is required for
   * this action.
   */
  template: string;
  /**
   * The map that holds all of the contextual information for your resolver invocation. A context is
   * required for this action.
   */
  context: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DataplaneEvaluatetemplateRequestSchema: Schema<V1DataplaneEvaluatetemplateRequest> =
  s.object<V1DataplaneEvaluatetemplateRequest>(
    {
      template: s.string(),
      context: s.string(),
    },
    { additionalProperties: s.json() },
  );
