import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { macSecKeySchema, type MacSecKey } from "./mac-sec-key.js";

export type AssociateMacSecKeyResponse = {
  /**
   * The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG
   * (dxlag-xxxx).
   */
  connectionId?: string;
  /** The MAC Security (MACsec) security keys associated with the connection. */
  macSecKeys?: MacSecKey[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateMacSecKeyResponseSchema: Schema<AssociateMacSecKeyResponse> =
  s.object<AssociateMacSecKeyResponse>(
    {
      connectionId: s.optional(s.string()),
      macSecKeys: s.optional(s.array(s.lazy(() => macSecKeySchema))),
    },
    { additionalProperties: s.json() },
  );
