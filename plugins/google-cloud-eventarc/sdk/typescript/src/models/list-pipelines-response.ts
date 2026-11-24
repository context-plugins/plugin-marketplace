import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pipelineSchema, type Pipeline } from "./pipeline.js";

/** The response message for the ListPipelines method. */
export type ListPipelinesResponse = {
  /** The requested pipelines, up to the number specified in `page_size`. */
  pipelines?: Pipeline[];
  /**
   * A page token that can be sent to `ListPipelines` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPipelinesResponseSchema: Schema<ListPipelinesResponse> = s.object<ListPipelinesResponse>(
  {
    pipelines: s.optional(s.array(s.lazy(() => pipelineSchema))),
    nextPageToken: s.optional(s.string()),
    unreachable: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
