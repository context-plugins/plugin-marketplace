import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateConnectionWithLagRequest = {
  /** The ID of the connection. */
  connectionId: string;
  /** The ID of the LAG with which to associate the connection. */
  lagId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateConnectionWithLagRequestSchema: Schema<AssociateConnectionWithLagRequest> =
  s.object<AssociateConnectionWithLagRequest>(
    {
      connectionId: s.string(),
      lagId: s.string(),
    },
    { additionalProperties: s.json() },
  );
