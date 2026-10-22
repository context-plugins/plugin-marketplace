import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bigSegmentStoreIntegrationCollectionLinksSchema,
  type BigSegmentStoreIntegrationCollectionLinks,
} from "./big-segment-store-integration-collection-links.js";
import {
  bigSegmentStoreIntegrationSchema,
  type BigSegmentStoreIntegration,
} from "./big-segment-store-integration.js";

export type BigSegmentStoreIntegrationCollection = {
  links: BigSegmentStoreIntegrationCollectionLinks;
  /** An array of persistent store integration configurations */
  items: BigSegmentStoreIntegration[];
};

export const bigSegmentStoreIntegrationCollectionSchema: Schema<BigSegmentStoreIntegrationCollection> =
  s.object<BigSegmentStoreIntegrationCollection>({
    links: bigSegmentStoreIntegrationCollectionLinksSchema,
    items: s.array(s.lazy(() => bigSegmentStoreIntegrationSchema)),
    _keysMap: {
      links: "_links",
    },
  });
