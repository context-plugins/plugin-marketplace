import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resellerHandshakeItemSchema, type ResellerHandshakeItem } from "./reseller-handshake-item.js";

export type ResellerHandshakeBatchCreate = {
  /** The distributor's program management account (DPMA) ID issuing the handshakes. */
  dpmaId: string;
  /**
   * If `true`, issues a new AWS Organizations handshake for each item without an existing one. If
   * omitted or `false`, maps the batch in place without issuing any AWS Organizations handshakes.
   *
   * @default false
   */
  sendHandshakes?: boolean;
  /** Batch items. Duplicate `resellerPmaAccountId` values within the batch are rejected. */
  items: ResellerHandshakeItem[];
};

const resellerHandshakeBatchCreateProperties: s.Shape<ResellerHandshakeBatchCreate> = {
  dpmaId: s.string(),
  sendHandshakes: s.defaulted(s.boolean(), false),
  items: s.array(s.lazy(() => resellerHandshakeItemSchema)),
};

export const resellerHandshakeBatchCreateInternalSchema: Schema<ResellerHandshakeBatchCreate> =
  s.object<ResellerHandshakeBatchCreate>(resellerHandshakeBatchCreateProperties);

export const resellerHandshakeBatchCreateSchema: Schema<ResellerHandshakeBatchCreate> = s.lazySchema(() =>
  s.object<ResellerHandshakeBatchCreate>({
    ...resellerHandshakeBatchCreateProperties,
    items: s.array(s.lazy(() => resellerHandshakeItemSchema)).check(s.minLength(1), s.maxLength(100)),
  }),
);
