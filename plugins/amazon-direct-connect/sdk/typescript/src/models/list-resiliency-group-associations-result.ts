import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resiliencyGroupAssociationSchema,
  type ResiliencyGroupAssociation,
} from "./resiliency-group-association.js";

export type ListResiliencyGroupAssociationsResult = {
  /** The connection associations for the resiliency group. */
  items?: ResiliencyGroupAssociation[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResiliencyGroupAssociationsResultSchema: Schema<ListResiliencyGroupAssociationsResult> =
  s.object<ListResiliencyGroupAssociationsResult>(
    {
      items: s.optional(s.array(s.lazy(() => resiliencyGroupAssociationSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
