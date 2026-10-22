import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type BigSegmentStoreIntegrationLinks = {
  self: Link;
  parent: Link;
  project: Link;
  environment: Link;
};

export const bigSegmentStoreIntegrationLinksSchema: Schema<BigSegmentStoreIntegrationLinks> =
  s.object<BigSegmentStoreIntegrationLinks>({
    self: linkSchema,
    parent: linkSchema,
    project: linkSchema,
    environment: linkSchema,
  });
