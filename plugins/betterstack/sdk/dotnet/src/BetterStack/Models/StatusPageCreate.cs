using System.Text.Json.Serialization;
using BetterStack.Core.Models;
using BetterStack.Core.Validation;
using BetterStack.Core.Validation.Attributes;

namespace BetterStack.Models;

public record StatusPageCreate
{
    [JsonPropertyName("company_name")]
    public required string CompanyName { get; init; }

    [JsonPropertyName("company_url")]
    [Format(FormatKind.Uri)]
    public required string CompanyUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_url")]
    [Format(FormatKind.Uri)]
    public string? ContactUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo_url")]
    [Format(FormatKind.Uri)]
    public string? LogoUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    [JsonPropertyName("subdomain")]
    public required string Subdomain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_domain")]
    public string? CustomDomain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("announcement")]
    public string? Announcement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("announcement_embed_visible")]
    public bool? AnnouncementEmbedVisible { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("history")]
    public int? History { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password_enabled")]
    public bool? PasswordEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("google_analytics_id")]
    public string? GoogleAnalyticsId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min_incident_length")]
    public int? MinIncidentLength { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscribable")]
    public bool? Subscribable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hide_from_search_engines")]
    public bool? HideFromSearchEngines { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
