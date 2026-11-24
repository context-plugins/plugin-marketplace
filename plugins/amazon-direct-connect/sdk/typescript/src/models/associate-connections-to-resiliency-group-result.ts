import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resiliencyGroupAssociationSchema,
  type ResiliencyGroupAssociation,
} from "./resiliency-group-association.js";

export type AssociateConnectionsToResiliencyGroupResult = {
  /** The connection associations for the resiliency group. */
  resiliencyGroupAssociations?: ResiliencyGroupAssociation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateConnectionsToResiliencyGroupResultSchema: Schema<AssociateConnectionsToResiliencyGroupResult> =
  s.object<AssociateConnectionsToResiliencyGroupResult>(
    {
      resiliencyGroupAssociations: s.optional(s.array(s.lazy(() => resiliencyGroupAssociationSchema))),
    },
    { additionalProperties: s.json() },
  );
