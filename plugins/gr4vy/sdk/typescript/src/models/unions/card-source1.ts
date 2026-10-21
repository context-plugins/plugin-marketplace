import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSourceSchema, type CardSource } from "../card-source.js";

/** The optional source of the decrypted device token. */
export type CardSource1 = CardSource;

export const cardSource1Schema: Schema<CardSource1> = s.of<CardSource1>(
  s.union([s.lazy(() => cardSourceSchema)]),
);
