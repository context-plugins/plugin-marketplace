import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagImportIntegrationCollectionLinks = {
  self: Link;
  parent?: Link;
};

export const flagImportIntegrationCollectionLinksSchema: Schema<FlagImportIntegrationCollectionLinks> =
  s.object<FlagImportIntegrationCollectionLinks>({
    self: linkSchema,
    parent: s.optional(s.lazy(() => linkSchema)),
  });
