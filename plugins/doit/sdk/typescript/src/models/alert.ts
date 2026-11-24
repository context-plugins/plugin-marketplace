import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertConfigInternalSchema, alertConfigSchema, type AlertConfig } from "./alert-config.js";
import {
  alertSlackChannelInternalSchema,
  alertSlackChannelSchema,
  type AlertSlackChannel,
} from "./alert-slack-channel.js";

/** Configuration and runtime metadata of an alert. */
export type Alert = {
  /** Alert ID. */
  id?: string;
  /** Alert Name. */
  name: string;
  /** The time when the alert was created (in Unix milliseconds). */
  createTime?: number;
  /** Last time the alert was modified (in Unix milliseconds). */
  updateTime?: number;
  /**
   * Last notification activity in Unix milliseconds. Slack advances this on the first provider
   * acceptance for a detection, which does not confirm final delivery.
   */
  lastAlerted?: number | null;
  /**
   * Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an
   * array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and
   * repeated destinations are collapsed. At least one email or Slack destination must remain.
   * Discover eligible destinations with listAlertSlackChannels.
   */
  recipientsSlackChannels?: AlertSlackChannel[];
  /** List of emails that will be notified when the alert is triggered. */
  recipients?: string[];
  /** Parameters that define when and how an alert is evaluated. */
  config?: AlertConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertProperties: s.Shape<Alert> = {
  id: s.optional(s.string()),
  name: s.string(),
  createTime: s.optional(s.int()),
  updateTime: s.optional(s.int()),
  lastAlerted: s.optionalNullable(s.int()),
  recipientsSlackChannels: s.optional(s.array(s.lazy(() => alertSlackChannelInternalSchema))),
  recipients: s.optional(s.array(s.string())),
  config: s.optional(s.lazy(() => alertConfigInternalSchema)),
};

export const alertInternalSchema: Schema<Alert> = s.object<Alert>(alertProperties, {
  additionalProperties: s.json(),
});

export const alertSchema: Schema<Alert> = s.lazySchema(() =>
  s.object<Alert>(
    {
      ...alertProperties,
      recipientsSlackChannels: s.optional(
        s.array(s.lazy(() => alertSlackChannelSchema)).check(s.maxLength(50)),
      ),
      config: s.optional(s.lazy(() => alertConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
