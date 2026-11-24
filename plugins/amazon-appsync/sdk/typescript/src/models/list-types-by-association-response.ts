import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeAwsAppSyncTypesApiSchema, type TypeAwsAppSyncTypesApi } from "./type-aws-app-sync-types-api.js";

export type ListTypesByAssociationResponse = {
  /** The Type objects. */
  types?: TypeAwsAppSyncTypesApi[];
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to
   * return the next set of items in the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTypesByAssociationResponseSchema: Schema<ListTypesByAssociationResponse> =
  s.object<ListTypesByAssociationResponse>(
    {
      types: s.optional(s.array(s.lazy(() => typeAwsAppSyncTypesApiSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
