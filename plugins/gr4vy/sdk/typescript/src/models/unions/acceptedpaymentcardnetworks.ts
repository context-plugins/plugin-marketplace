import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  acceptedpaymentcardnetworkSchema,
  type Acceptedpaymentcardnetwork,
} from "../acceptedpaymentcardnetwork.js";

/** Accepted payment card networks. Empty list or absence means all networks accepted. */
export type Acceptedpaymentcardnetworks = Acceptedpaymentcardnetwork[];

export const acceptedpaymentcardnetworksSchema: Schema<Acceptedpaymentcardnetworks> =
  s.of<Acceptedpaymentcardnetworks>(s.union([s.array(s.lazy(() => acceptedpaymentcardnetworkSchema))]));
