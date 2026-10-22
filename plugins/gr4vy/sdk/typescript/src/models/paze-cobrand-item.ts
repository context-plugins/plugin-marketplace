import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { benefitsofferedSchema, type Benefitsoffered } from "./unions/benefitsoffered.js";

export type PazeCobrandItem = {
  /** Product name of the cobrand card. Must match exactly with the card name from the network. */
  name: string;
  /** Whether benefits are offered for this cobrand card. */
  benefitsOffered?: Benefitsoffered;
};

export const pazeCobrandItemSchema: Schema<PazeCobrandItem> = s.object<PazeCobrandItem>({
  name: s.string(),
  benefitsOffered: s.optional(s.lazy(() => benefitsofferedSchema)),
});
