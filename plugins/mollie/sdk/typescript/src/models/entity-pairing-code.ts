import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details1Schema, type Details1 } from "./details1.js";
import { links40Schema, type Links40 } from "./links40.js";
import { modeSchema, type Mode } from "./mode.js";
import { pairingCodeStatusSchema, type PairingCodeStatus } from "./pairing-code-status.js";

export type EntityPairingCode = {
  /**
   * Indicates the response contains a terminal pairing code object. Will always contain the string
   * `terminal-pairing-code` for this endpoint.
   */
  resource: string;
  /** The unique identifier of the pairing code. Example: `termpc_R7gX5Ea9bC4DkFj3G`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The human-readable pairing code to be entered on the terminal. This code is multi-use and will
   * expire after the time indicated in `expiresAt`.
   */
  code: string;
  /** The ID of the profile the terminal is being paired with. */
  profileId: string;
  status: PairingCodeStatus;
  /** Additional pairing code data, present only when requested via the `include` parameter. */
  details?: Details1 | null;
  /**
   * The date and time the pairing code expires, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Pairing codes expire 90 days after
   * creation. After this time, the code can no longer be used to pair a terminal.
   */
  expiresAt: string;
  /**
   * The date and time the pairing code was revoked, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` if the code has not been revoked.
   */
  revokedAt?: string | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links40;
};

export const entityPairingCodeSchema: Schema<EntityPairingCode> = s.object<EntityPairingCode>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  code: s.string(),
  profileId: s.string(),
  status: pairingCodeStatusSchema,
  details: s.optionalNullable(s.lazy(() => details1Schema)),
  expiresAt: s.string(),
  revokedAt: s.optionalNullable(s.string()),
  createdAt: s.string(),
  links: links40Schema,
  _keysMap: {
    links: "_links",
  },
});
