import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relayAutoConfigRepSchema, type RelayAutoConfigRep } from "./relay-auto-config-rep.js";

export type RelayAutoConfigCollectionRep = {
  /** An array of Relay Proxy configurations */
  items: RelayAutoConfigRep[];
};

export const relayAutoConfigCollectionRepSchema: Schema<RelayAutoConfigCollectionRep> =
  s.object<RelayAutoConfigCollectionRep>({
    items: s.array(s.lazy(() => relayAutoConfigRepSchema)),
  });
