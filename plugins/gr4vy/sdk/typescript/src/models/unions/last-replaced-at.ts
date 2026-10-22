import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time when this card was last replaced by the account updater. */
export type LastReplacedAt = Date;

export const lastReplacedAtSchema: Schema<LastReplacedAt> = s.of<LastReplacedAt>(s.union([s.dateTime()]));
