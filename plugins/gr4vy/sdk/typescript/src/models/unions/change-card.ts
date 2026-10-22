import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Follow-up link to change the selected card. */
export type ChangeCard = string;

export const changeCardSchema: Schema<ChangeCard> = s.of<ChangeCard>(s.union([s.string()]));
