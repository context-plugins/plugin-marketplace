import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateHostedConnectionRequest = {
  /** The ID of the hosted connection. */
  connectionId: string;
  /** The ID of the interconnect or the LAG. */
  parentConnectionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateHostedConnectionRequestSchema: Schema<AssociateHostedConnectionRequest> =
  s.object<AssociateHostedConnectionRequest>(
    {
      connectionId: s.string(),
      parentConnectionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
