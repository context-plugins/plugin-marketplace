import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceDevCycleManagementWebhooksApiSchema,
  type SourceDevCycleManagementWebhooksApi,
} from "./source-dev-cycle-management-webhooks-api.js";

export type Webhook = {
  /** The name of the Webhook */
  name: string;
  /** The description of the Webhook */
  description?: string;
  /** A unique Webhook ID */
  id: string;
  /** The Project owning the Webhook */
  project: string;
  /** Events in this webhook will only be triggered for this feature */
  feature?: string;
  /** Events in this webhook will only be triggered for these environments */
  environments: string[];
  /** The URL to call once the type is triggered */
  url: string;
  /** The events that trigger the webhook */
  events: string[];
  /** Source where webhook was created from */
  source?: SourceDevCycleManagementWebhooksApi;
  /** Auth0 User who created the webhook. */
  createdBy?: string;
  /** The date the webhook was created, set by the API */
  createdAt: Date;
  /** The date the webhook was last updated, set by the API */
  updatedAt: Date;
  /** The type of format to send the payload changes in */
  outputFormat?: Record<string, unknown>;
  /** The Slack Integration ID if the Webhook is created from a Slack command */
  slackIntegration?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  name: s.string(),
  description: s.optional(s.string()),
  id: s.string(),
  project: s.string(),
  feature: s.optional(s.string()),
  environments: s.array(s.string()),
  url: s.string(),
  events: s.array(s.string()),
  source: s.optional(s.lazy(() => sourceDevCycleManagementWebhooksApiSchema)),
  createdBy: s.optional(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  outputFormat: s.optional(s.record(s.string(), s.unknown())),
  slackIntegration: s.optional(s.string()),
  _keysMap: {
    id: "_id",
    project: "_project",
    feature: "_feature",
    environments: "_environments",
    slackIntegration: "_slackIntegration",
  },
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      description: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
