import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/**
 * Card schemes accepted when creating jobs using this set of Loon API keys. Loon is the Account
 * Updater service we use and if the field is not set or if it's set to null, the Account Updater
 * service doesn't get configured. If the field is set to `null`, the other `loon_*` fields must be
 * set to null as well.
 */
export type LoonAcceptedSchemes = CardScheme[];

export const loonAcceptedSchemesSchema: Schema<LoonAcceptedSchemes> = s.of<LoonAcceptedSchemes>(
  s.union([s.array(s.lazy(() => cardSchemeSchema))]),
);
