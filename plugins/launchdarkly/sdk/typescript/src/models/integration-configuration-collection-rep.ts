import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  integrationConfigurationsRepSchema,
  type IntegrationConfigurationsRep,
} from "./integration-configurations-rep.js";
import { linkSchema, type Link } from "./link.js";

export type IntegrationConfigurationCollectionRep = {
  /** An array of integration configurations */
  items: IntegrationConfigurationsRep[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const integrationConfigurationCollectionRepSchema: Schema<IntegrationConfigurationCollectionRep> =
  s.object<IntegrationConfigurationCollectionRep>({
    items: s.array(s.lazy(() => integrationConfigurationsRepSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
