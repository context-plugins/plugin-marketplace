import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionidSchema, type Connectionid } from "./unions/connectionid.js";
import { linkemailSchema, type Linkemail } from "./unions/linkemail.js";
import { mode1Schema, type Mode1 } from "./unions/mode1.js";

/** The project's active Stripe Link connection, if any. */
export type StripeLinkStatusResponse = {
  isConnected: boolean;
  connectionId?: Connectionid;
  linkEmail?: Linkemail;
  mode?: Mode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stripeLinkStatusResponseSchema: Schema<StripeLinkStatusResponse> =
  s.object<StripeLinkStatusResponse>(
    {
      isConnected: s.boolean(),
      connectionId: s.optional(s.lazy(() => connectionidSchema)),
      linkEmail: s.optional(s.lazy(() => linkemailSchema)),
      mode: s.optional(s.lazy(() => mode1Schema)),
    },
    { additionalProperties: s.json() },
  );
