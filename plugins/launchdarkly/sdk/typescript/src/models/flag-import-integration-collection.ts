import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flagImportIntegrationCollectionLinksSchema,
  type FlagImportIntegrationCollectionLinks,
} from "./flag-import-integration-collection-links.js";
import { flagImportIntegrationSchema, type FlagImportIntegration } from "./flag-import-integration.js";

export type FlagImportIntegrationCollection = {
  links: FlagImportIntegrationCollectionLinks;
  /** An array of flag import configurations */
  items: FlagImportIntegration[];
};

export const flagImportIntegrationCollectionSchema: Schema<FlagImportIntegrationCollection> =
  s.object<FlagImportIntegrationCollection>({
    links: flagImportIntegrationCollectionLinksSchema,
    items: s.array(s.lazy(() => flagImportIntegrationSchema)),
    _keysMap: {
      links: "_links",
    },
  });
