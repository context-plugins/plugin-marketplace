import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { revealSchema, type Reveal } from "./reveal.js";

export type V3ContactsEnrichRequest = {
  ids: string[];
  reveal?: Reveal[];
  /**
   * Whether this call is allowed to fall through to your enabled third-party providers when Lusha's
   * own data has no match, for the fields requested via `reveal`. Defaults to `true` whenever Data
   * Waterfall is enabled on your account (Account > Waterfall) - pass `false` to opt this specific
   * call out. Has no effect if Data Waterfall or no providers are enabled on your account. Provider
   * order isn't configurable - Lusha manages that internally.
   *
   * @default true
   */
  waterfallEnabled?: boolean;
  /**
   * Optional. If provided, these contacts are also added to this table (if not already present) and
   * the revealed fields' columns are populated. See the Tables API.
   */
  tableId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactsEnrichRequestProperties: s.Shape<V3ContactsEnrichRequest> = {
  ids: s.array(s.string()),
  reveal: s.optional(s.array(s.lazy(() => revealSchema))),
  waterfallEnabled: s.defaulted(s.boolean(), true),
  tableId: s.optional(s.string()),
};

export const v3ContactsEnrichRequestInternalSchema: Schema<V3ContactsEnrichRequest> =
  s.object<V3ContactsEnrichRequest>(v3ContactsEnrichRequestProperties, { additionalProperties: s.json() });

export const v3ContactsEnrichRequestSchema: Schema<V3ContactsEnrichRequest> = s.lazySchema(() =>
  s.object<V3ContactsEnrichRequest>(
    {
      ...v3ContactsEnrichRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
