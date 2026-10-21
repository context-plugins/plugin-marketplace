import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coreLinkSchema, type CoreLink } from "./core-link.js";

export type ParentLink = {
  parent: CoreLink;
};

export const parentLinkSchema: Schema<ParentLink> = s.object<ParentLink>({
  parent: coreLinkSchema,
});
