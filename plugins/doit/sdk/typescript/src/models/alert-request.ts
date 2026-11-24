import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertConfigInternalSchema, alertConfigSchema, type AlertConfig } from "./alert-config.js";
import {
  alertSlackChannelRequestInternalSchema,
  alertSlackChannelRequestSchema,
  type AlertSlackChannelRequest,
} from "./alert-slack-channel-request.js";

/** Request body for creating a new alert. */
export type AlertRequest = {
  /** Name of the alert. */
  name: string;
  /** Parameters that define when and how an alert is evaluated. */
  config: AlertConfig;
  /**
   * Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an
   * array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and
   * repeated destinations are collapsed. At least one email or Slack destination must remain.
   * Discover eligible destinations with listAlertSlackChannels.
   */
  recipientsSlackChannels?: AlertSlackChannelRequest[];
  /**
   * Email destinations matching allowed customer domains. Omitted on create defaults to the
   * resolved owner email only when no Slack destinations are supplied. An explicit [] means no
   * email and requires a Slack destination. Null is rejected.
   */
  recipients?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertRequestProperties: s.Shape<AlertRequest> = {
  name: s.string(),
  config: alertConfigInternalSchema,
  recipientsSlackChannels: s.optional(s.array(s.lazy(() => alertSlackChannelRequestInternalSchema))),
  recipients: s.optional(s.array(s.string())),
};

export const alertRequestInternalSchema: Schema<AlertRequest> = s.object<AlertRequest>(
  alertRequestProperties,
  { additionalProperties: s.json() },
);

export const alertRequestSchema: Schema<AlertRequest> = s.lazySchema(() =>
  s.object<AlertRequest>(
    {
      ...alertRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(64)),
      config: alertConfigSchema,
      recipientsSlackChannels: s.optional(
        s.array(s.lazy(() => alertSlackChannelRequestSchema)).check(s.maxLength(50)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
