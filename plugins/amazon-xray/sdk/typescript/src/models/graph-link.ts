import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GraphLink = {
  /** Relationship of a trace to the corresponding service. */
  referenceType?: string;
  /** Source trace of a link relationship. */
  sourceTraceId?: string;
  /** Destination traces of a link relationship. */
  destinationTraceIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphLinkSchema: Schema<GraphLink> = s.object<GraphLink>(
  {
    referenceType: s.optional(s.string()),
    sourceTraceId: s.optional(s.string()),
    destinationTraceIds: s.optional(s.array(s.string())),
    _keysMap: {
      referenceType: "ReferenceType",
      sourceTraceId: "SourceTraceId",
      destinationTraceIds: "DestinationTraceIds",
    },
  },
  { additionalProperties: s.json() },
);
