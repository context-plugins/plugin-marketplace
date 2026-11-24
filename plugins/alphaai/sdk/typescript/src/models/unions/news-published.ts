import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Article publication time for its AlphAI URL. */
export type NewsPublished = Date;

export const newsPublishedSchema: Schema<NewsPublished> = s.of<NewsPublished>(s.union([s.dateTime()]));
