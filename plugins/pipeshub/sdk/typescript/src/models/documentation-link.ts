import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentationLink = {
  title: string;
  url: string;
  /** For example setup, docs or pipeshub (the casing varies) */
  type: string;
};

export const documentationLinkSchema: Schema<DocumentationLink> = s.object<DocumentationLink>({
  title: s.string(),
  url: s.string(),
  type: s.string(),
});
