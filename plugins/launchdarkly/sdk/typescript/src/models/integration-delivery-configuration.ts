import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import {
  integrationDeliveryConfigurationLinksSchema,
  type IntegrationDeliveryConfigurationLinks,
} from "./integration-delivery-configuration-links.js";

export type IntegrationDeliveryConfiguration = {
  links: IntegrationDeliveryConfigurationLinks;
  /** The integration ID */
  id: string;
  /** The integration key */
  integrationKey: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  config: Record<string, Record<string, unknown>>;
  /** Whether the configuration is turned on */
  on: boolean;
  /** List of tags for this configuration */
  tags: string[];
  /** Name of the configuration */
  name: string;
  /** Version of the current configuration */
  version: number;
  access?: Access;
};

export const integrationDeliveryConfigurationSchema: Schema<IntegrationDeliveryConfiguration> =
  s.object<IntegrationDeliveryConfiguration>({
    links: integrationDeliveryConfigurationLinksSchema,
    id: s.string(),
    integrationKey: s.string(),
    projectKey: s.string(),
    environmentKey: s.string(),
    config: s.record(s.string(), s.record(s.string(), s.unknown())),
    on: s.boolean(),
    tags: s.array(s.string()),
    name: s.string(),
    version: s.int(),
    access: s.optional(s.lazy(() => accessSchema)),
    _keysMap: {
      links: "_links",
      id: "_id",
      access: "_access",
    },
  });
