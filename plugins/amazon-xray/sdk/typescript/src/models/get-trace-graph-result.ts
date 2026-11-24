import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

export type GetTraceGraphResult = {
  /** The services that have processed one of the specified requests. */
  services?: Service[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTraceGraphResultSchema: Schema<GetTraceGraphResult> = s.object<GetTraceGraphResult>(
  {
    services: s.optional(s.array(s.lazy(() => serviceSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      services: "Services",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
