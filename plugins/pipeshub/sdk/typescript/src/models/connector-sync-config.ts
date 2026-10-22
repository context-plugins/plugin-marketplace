import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledConfig1Schema, type ScheduledConfig1 } from "./scheduled-config1.js";
import { selectedStrategySchema, type SelectedStrategy } from "./selected-strategy.js";
import { webhookConfig1Schema, type WebhookConfig1 } from "./webhook-config1.js";

/**
 * Sync strategy plus connector-specific sync settings, flat: send each field listed under
 * `sync.customFields` in the registry schema by its `name`.
 */
export type ConnectorSyncConfig = {
  selectedStrategy?: SelectedStrategy;
  scheduledConfig?: ScheduledConfig1;
  webhookConfig?: WebhookConfig1;
};

export const connectorSyncConfigSchema: Schema<ConnectorSyncConfig> = s.object<ConnectorSyncConfig>({
  selectedStrategy: s.optional(s.lazy(() => selectedStrategySchema)),
  scheduledConfig: s.optional(s.lazy(() => scheduledConfig1Schema)),
  webhookConfig: s.optional(s.lazy(() => webhookConfig1Schema)),
});
