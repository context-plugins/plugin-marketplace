import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuyerExternalIdentifier22 = string;

export const buyerExternalIdentifier22Schema: Schema<BuyerExternalIdentifier22> =
  s.of<BuyerExternalIdentifier22>(s.union([s.string()]));
