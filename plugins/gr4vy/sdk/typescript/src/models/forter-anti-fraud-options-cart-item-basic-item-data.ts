import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type501Schema, type Type501 } from "./unions/type501.js";

export type ForterAntiFraudOptionsCartItemBasicItemData = {
  /** Indicates whether the item is a physical good or a service/digital item. */
  type?: Type501;
};

export const forterAntiFraudOptionsCartItemBasicItemDataSchema: Schema<ForterAntiFraudOptionsCartItemBasicItemData> =
  s.object<ForterAntiFraudOptionsCartItemBasicItemData>({
    type: s.optional(s.lazy(() => type501Schema)),
  });
