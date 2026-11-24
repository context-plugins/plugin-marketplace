import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  alertConfigUpdateInternalSchema,
  alertConfigUpdateSchema,
  type AlertConfigUpdate,
} from "./alert-config-update.js";
import {
  alertSlackChannelRequestInternalSchema,
  alertSlackChannelRequestSchema,
  type AlertSlackChannelRequest,
} from "./alert-slack-channel-request.js";

/**
 * Partial update. Only supplied fields change. Recipient-only and config-field-only requests are
 * supported. Identical effective updates preserve updateTime and the notification revision. Empty
 * recipient arrays now clear destinations instead of being ignored; direct API clients relying on
 * the previous behavior must omit those fields instead.
 */
export type AlertUpdateRequest = {
  /** Alert name */
  name?: string;
  /**
   * Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be
   * null except ignoreValuesRange.
   */
  config?: AlertConfigUpdate;
  /**
   * Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an
   * array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and
   * repeated destinations are collapsed. At least one email or Slack destination must remain.
   * Discover eligible destinations with listAlertSlackChannels.
   */
  recipientsSlackChannels?: AlertSlackChannelRequest[];
  /**
   * Email destinations. Omission preserves saved emails; an array replaces them; [] clears them and
   * requires a Slack destination in the resulting alert. Null is rejected.
   */
  recipients?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertUpdateRequestProperties: s.Shape<AlertUpdateRequest> = {
  name: s.optional(s.string()),
  config: s.optional(s.lazy(() => alertConfigUpdateInternalSchema)),
  recipientsSlackChannels: s.optional(s.array(s.lazy(() => alertSlackChannelRequestInternalSchema))),
  recipients: s.optional(s.array(s.string())),
};

export const alertUpdateRequestInternalSchema: Schema<AlertUpdateRequest> = s.object<AlertUpdateRequest>(
  alertUpdateRequestProperties,
  { additionalProperties: s.json() },
);

export const alertUpdateRequestSchema: Schema<AlertUpdateRequest> = s.lazySchema(() =>
  s.object<AlertUpdateRequest>(
    {
      ...alertUpdateRequestProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(64))),
      config: s.optional(s.lazy(() => alertConfigUpdateSchema)),
      recipientsSlackChannels: s.optional(
        s.array(s.lazy(() => alertSlackChannelRequestSchema)).check(s.maxLength(50)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
