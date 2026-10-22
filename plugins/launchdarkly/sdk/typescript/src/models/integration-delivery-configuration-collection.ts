import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  integrationDeliveryConfigurationCollectionLinksSchema,
  type IntegrationDeliveryConfigurationCollectionLinks,
} from "./integration-delivery-configuration-collection-links.js";
import {
  integrationDeliveryConfigurationSchema,
  type IntegrationDeliveryConfiguration,
} from "./integration-delivery-configuration.js";

export type IntegrationDeliveryConfigurationCollection = {
  links: IntegrationDeliveryConfigurationCollectionLinks;
  /** An array of integration delivery configurations */
  items: IntegrationDeliveryConfiguration[];
};

export const integrationDeliveryConfigurationCollectionSchema: Schema<IntegrationDeliveryConfigurationCollection> =
  s.object<IntegrationDeliveryConfigurationCollection>({
    links: integrationDeliveryConfigurationCollectionLinksSchema,
    items: s.array(s.lazy(() => integrationDeliveryConfigurationSchema)),
    _keysMap: {
      links: "_links",
    },
  });
