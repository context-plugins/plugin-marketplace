import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import {
  flagImportIntegrationLinksSchema,
  type FlagImportIntegrationLinks,
} from "./flag-import-integration-links.js";
import { flagImportStatusSchema, type FlagImportStatus } from "./flag-import-status.js";
import { integrationKey1Schema, type IntegrationKey1 } from "./integration-key1.js";

export type FlagImportIntegration = {
  links: FlagImportIntegrationLinks;
  /** The integration ID */
  id: string;
  /** The integration key */
  integrationKey: IntegrationKey1;
  /** The project key */
  projectKey: string;
  config: Record<string, Record<string, unknown>>;
  /** List of tags for this configuration */
  tags: string[];
  /** Name of the configuration */
  name: string;
  /** Version of the current configuration */
  version: number;
  access?: Access;
  status: FlagImportStatus;
};

export const flagImportIntegrationSchema: Schema<FlagImportIntegration> = s.object<FlagImportIntegration>({
  links: flagImportIntegrationLinksSchema,
  id: s.string(),
  integrationKey: integrationKey1Schema,
  projectKey: s.string(),
  config: s.record(s.string(), s.record(s.string(), s.unknown())),
  tags: s.array(s.string()),
  name: s.string(),
  version: s.int(),
  access: s.optional(s.lazy(() => accessSchema)),
  status: flagImportStatusSchema,
  _keysMap: {
    links: "_links",
    id: "_id",
    access: "_access",
    status: "_status",
  },
});
