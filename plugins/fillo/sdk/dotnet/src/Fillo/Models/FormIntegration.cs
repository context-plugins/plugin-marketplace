using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record FormIntegration
{
    [JsonPropertyName("provider")]
    public required Provider Provider { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// The provider's FormIntegrationConfig keys only; null when the form has never used this destination. Sheets: spreadsheetId, spreadsheetUrl, spreadsheetTitle, sheetTab, sheetTabId, columns. Notion: databaseId, databaseUrl, properties, titleFieldId. Slack: slackChannelId, slackChannelLabel, slackChannelIsPrivate, slackTeamId, slackIncludeFieldIds. HubSpot: hubspotPortalId, hubspotEmailFieldId, hubspotMappings, hubspotFormGuid, hubspotFormName, hubspotCreateMarketableContact, hubspotCompany, hubspotDeal.
    /// </summary>
    [JsonPropertyName("config")]
    public required object? Config { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
