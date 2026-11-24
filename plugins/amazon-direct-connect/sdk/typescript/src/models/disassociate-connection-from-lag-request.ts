import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisassociateConnectionFromLagRequest = {
  /** The ID of the connection. */
  connectionId: string;
  /** The ID of the LAG. */
  lagId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateConnectionFromLagRequestSchema: Schema<DisassociateConnectionFromLagRequest> =
  s.object<DisassociateConnectionFromLagRequest>(
    {
      connectionId: s.string(),
      lagId: s.string(),
    },
    { additionalProperties: s.json() },
  );
