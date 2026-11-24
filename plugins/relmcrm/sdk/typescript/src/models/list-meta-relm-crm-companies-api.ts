import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objectRelmCrmCompaniesApiSchema,
  type ObjectRelmCrmCompaniesApi,
} from "./object-relm-crm-companies-api.js";

export type ListMetaRelmCrmCompaniesApi = {
  object?: ObjectRelmCrmCompaniesApi;
  hasMore?: boolean;
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMetaRelmCrmCompaniesApiSchema: Schema<ListMetaRelmCrmCompaniesApi> =
  s.object<ListMetaRelmCrmCompaniesApi>(
    {
      object: s.optional(s.lazy(() => objectRelmCrmCompaniesApiSchema)),
      hasMore: s.optional(s.boolean()),
      nextCursor: s.optionalNullable(s.string()),
      _keysMap: {
        hasMore: "has_more",
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
