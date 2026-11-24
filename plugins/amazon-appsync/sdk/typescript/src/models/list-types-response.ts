import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeAwsAppSyncTypesApiSchema, type TypeAwsAppSyncTypesApi } from "./type-aws-app-sync-types-api.js";

export type ListTypesResponse = {
  /** The Type objects. */
  types?: TypeAwsAppSyncTypesApi[];
  /**
   * An identifier to pass in the next request to this operation to return the next set of items in
   * the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTypesResponseSchema: Schema<ListTypesResponse> = s.object<ListTypesResponse>(
  {
    types: s.optional(s.array(s.lazy(() => typeAwsAppSyncTypesApiSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
