import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type IntegrationDeliveryConfigurationCollectionLinks = {
  self: Link;
  parent?: Link;
};

export const integrationDeliveryConfigurationCollectionLinksSchema: Schema<IntegrationDeliveryConfigurationCollectionLinks> =
  s.object<IntegrationDeliveryConfigurationCollectionLinks>({
    self: linkSchema,
    parent: s.optional(s.lazy(() => linkSchema)),
  });
