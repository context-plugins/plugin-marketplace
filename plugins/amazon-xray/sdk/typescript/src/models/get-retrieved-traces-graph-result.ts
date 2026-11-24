import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retrievalStatusSchema, type RetrievalStatus } from "./retrieval-status.js";
import { retrievedServiceSchema, type RetrievedService } from "./retrieved-service.js";

export type GetRetrievedTracesGraphResult = {
  /** Status of the retrieval. */
  retrievalStatus?: RetrievalStatus;
  /** Retrieved services. */
  services?: RetrievedService[];
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * indexes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getRetrievedTracesGraphResultSchema: Schema<GetRetrievedTracesGraphResult> =
  s.object<GetRetrievedTracesGraphResult>(
    {
      retrievalStatus: s.optional(s.lazy(() => retrievalStatusSchema)),
      services: s.optional(s.array(s.lazy(() => retrievedServiceSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        retrievalStatus: "RetrievalStatus",
        services: "Services",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
