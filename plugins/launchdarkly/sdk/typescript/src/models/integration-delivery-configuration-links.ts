import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type IntegrationDeliveryConfigurationLinks = {
  self: Link;
  parent: Link;
  project: Link;
  environment: Link;
};

export const integrationDeliveryConfigurationLinksSchema: Schema<IntegrationDeliveryConfigurationLinks> =
  s.object<IntegrationDeliveryConfigurationLinks>({
    self: linkSchema,
    parent: linkSchema,
    project: linkSchema,
    environment: linkSchema,
  });
