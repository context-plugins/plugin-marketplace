import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coreLinkSchema, type CoreLink } from "./core-link.js";

export type ViewsSelfLink = {
  self: CoreLink;
};

export const viewsSelfLinkSchema: Schema<ViewsSelfLink> = s.object<ViewsSelfLink>({
  self: coreLinkSchema,
});
