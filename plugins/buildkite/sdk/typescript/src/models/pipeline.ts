import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pipeline = {
  id?: string;
  url?: string;
  webUrl?: string;
  name?: string;
  slug?: string;
  repository?: string;
  clusterId?: string;
  defaultBranch?: string;
  description?: string;
  configuration?: string;
  steps?: Record<string, unknown>[];
  createdAt?: Date;
  archivedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pipelineProperties: s.Shape<Pipeline> = {
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  webUrl: s.optional(s.string()),
  name: s.optional(s.string()),
  slug: s.optional(s.string()),
  repository: s.optional(s.string()),
  clusterId: s.optional(s.string()),
  defaultBranch: s.optional(s.string()),
  description: s.optional(s.string()),
  configuration: s.optional(s.string()),
  steps: s.optional(s.array(s.record(s.string(), s.unknown()))),
  createdAt: s.optional(s.dateTime()),
  archivedAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    webUrl: "web_url",
    clusterId: "cluster_id",
    defaultBranch: "default_branch",
    createdAt: "created_at",
    archivedAt: "archived_at",
  },
};

export const pipelineInternalSchema: Schema<Pipeline> = s.object<Pipeline>(pipelineProperties, {
  additionalProperties: s.json(),
});

export const pipelineSchema: Schema<Pipeline> = s.lazySchema(() =>
  s.object<Pipeline>(
    {
      ...pipelineProperties,
      url: s.optional(s.string().check(s.url())),
      webUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
