import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type BigSegmentStoreIntegrationCollectionLinks = {
  self: Link;
  parent?: Link;
};

export const bigSegmentStoreIntegrationCollectionLinksSchema: Schema<BigSegmentStoreIntegrationCollectionLinks> =
  s.object<BigSegmentStoreIntegrationCollectionLinks>({
    self: linkSchema,
    parent: s.optional(s.lazy(() => linkSchema)),
  });
