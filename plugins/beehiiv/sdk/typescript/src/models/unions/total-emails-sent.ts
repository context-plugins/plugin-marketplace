import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total number of emails sent */
export type TotalEmailsSent = number | boolean;

export const totalEmailsSentSchema: Schema<TotalEmailsSent> = s.of<TotalEmailsSent>(
  s.union([s.int(), s.boolean()]),
);
