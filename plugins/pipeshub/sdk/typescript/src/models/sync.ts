import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectorSyncCustomFieldSchema,
  type ConnectorSyncCustomField,
} from "./connector-sync-custom-field.js";
import { realtimeConfigSchema, type RealtimeConfig } from "./realtime-config.js";
import { scheduledConfigSchema, type ScheduledConfig } from "./scheduled-config.js";
import { selectedStrategySchema, type SelectedStrategy } from "./selected-strategy.js";
import { supportedStrategySchema, type SupportedStrategy } from "./supported-strategy.js";
import { webhookConfigSchema, type WebhookConfig } from "./webhook-config.js";

export type Sync = {
  supportedStrategies?: SupportedStrategy[];
  selectedStrategy?: SelectedStrategy;
  webhookConfig?: WebhookConfig;
  scheduledConfig?: ScheduledConfig;
  realtimeConfig?: RealtimeConfig;
  customFields?: ConnectorSyncCustomField[];
  customValues?: Record<string, unknown>;
  values?: Record<string, unknown>;
};

export const syncSchema: Schema<Sync> = s.object<Sync>({
  supportedStrategies: s.optional(s.array(s.lazy(() => supportedStrategySchema))),
  selectedStrategy: s.optional(s.lazy(() => selectedStrategySchema)),
  webhookConfig: s.optional(s.lazy(() => webhookConfigSchema)),
  scheduledConfig: s.optional(s.lazy(() => scheduledConfigSchema)),
  realtimeConfig: s.optional(s.lazy(() => realtimeConfigSchema)),
  customFields: s.optional(s.array(s.lazy(() => connectorSyncCustomFieldSchema))),
  customValues: s.optional(s.record(s.string(), s.unknown())),
  values: s.optional(s.record(s.string(), s.unknown())),
});
