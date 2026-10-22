import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coreLinkSchema, type CoreLink } from "./core-link.js";

/** The location and content type of related resources */
export type ParentAndSelfLinks = {
  self: CoreLink;
  parent: CoreLink;
};

export const parentAndSelfLinksSchema: Schema<ParentAndSelfLinks> = s.object<ParentAndSelfLinks>({
  self: coreLinkSchema,
  parent: coreLinkSchema,
});
