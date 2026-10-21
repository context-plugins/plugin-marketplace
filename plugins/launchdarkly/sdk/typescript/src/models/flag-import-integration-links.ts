import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagImportIntegrationLinks = {
  self: Link;
  parent: Link;
  project: Link;
};

export const flagImportIntegrationLinksSchema: Schema<FlagImportIntegrationLinks> =
  s.object<FlagImportIntegrationLinks>({
    self: linkSchema,
    parent: linkSchema,
    project: linkSchema,
  });
