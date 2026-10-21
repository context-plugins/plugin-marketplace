import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import {
  bigSegmentStoreIntegrationLinksSchema,
  type BigSegmentStoreIntegrationLinks,
} from "./big-segment-store-integration-links.js";
import { bigSegmentStoreStatusSchema, type BigSegmentStoreStatus } from "./big-segment-store-status.js";
import { integrationKeySchema, type IntegrationKey } from "./integration-key.js";

export type BigSegmentStoreIntegration = {
  links: BigSegmentStoreIntegrationLinks;
  /** The integration ID */
  id: string;
  /** The integration key */
  integrationKey: IntegrationKey;
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
  status: BigSegmentStoreStatus;
};

export const bigSegmentStoreIntegrationSchema: Schema<BigSegmentStoreIntegration> =
  s.object<BigSegmentStoreIntegration>({
    links: bigSegmentStoreIntegrationLinksSchema,
    id: s.string(),
    integrationKey: integrationKeySchema,
    projectKey: s.string(),
    environmentKey: s.string(),
    config: s.record(s.string(), s.record(s.string(), s.unknown())),
    on: s.boolean(),
    tags: s.array(s.string()),
    name: s.string(),
    version: s.int(),
    access: s.optional(s.lazy(() => accessSchema)),
    status: bigSegmentStoreStatusSchema,
    _keysMap: {
      links: "_links",
      id: "_id",
      access: "_access",
      status: "_status",
    },
  });
