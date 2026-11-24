import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Title of the citation., Title of the webpage, if available., Title of the citation., Title of the
 * citation., Title of the webpage, if available., Title of the citation.
 */
export type Title = string;

export const titleSchema: Schema<Title> = s.of<Title>(s.union([s.string()]));
