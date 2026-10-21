import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if the card holder was authenticated. */
export type CardHolderAuthenticated = boolean;

export const cardHolderAuthenticatedSchema: Schema<CardHolderAuthenticated> = s.of<CardHolderAuthenticated>(
  s.union([s.boolean()]),
);
