import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";

export type FormIntegration = {
  provider: Provider;
  enabled: boolean;
  /**
   * The provider's FormIntegrationConfig keys only; null when the form has never used this
   * destination. Sheets: spreadsheetId, spreadsheetUrl, spreadsheetTitle, sheetTab, sheetTabId,
   * columns. Notion: databaseId, databaseUrl, properties, titleFieldId. Slack: slackChannelId,
   * slackChannelLabel, slackChannelIsPrivate, slackTeamId, slackIncludeFieldIds. HubSpot:
   * hubspotPortalId, hubspotEmailFieldId, hubspotMappings, hubspotFormGuid, hubspotFormName,
   * hubspotCreateMarketableContact, hubspotCompany, hubspotDeal.
   */
  config: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formIntegrationSchema: Schema<FormIntegration> = s.object<FormIntegration>(
  {
    provider: providerSchema,
    enabled: s.boolean(),
    config: s.nullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
