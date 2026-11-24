import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typosquattingDomainSchema, type TyposquattingDomain } from "./typosquatting-domain.js";

export type TyposquattingResponse = {
  status?: boolean;
  totalRecords?: number;
  currentPage?: number;
  totalPages?: number;
  hasNextPage?: boolean;
  nextPageToken?: string;
  domains?: TyposquattingDomain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const typosquattingResponseSchema: Schema<TyposquattingResponse> = s.object<TyposquattingResponse>(
  {
    status: s.optional(s.boolean()),
    totalRecords: s.optional(s.int()),
    currentPage: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    hasNextPage: s.optional(s.boolean()),
    nextPageToken: s.optional(s.string()),
    domains: s.optional(s.array(s.lazy(() => typosquattingDomainSchema))),
  },
  { additionalProperties: s.json() },
);
