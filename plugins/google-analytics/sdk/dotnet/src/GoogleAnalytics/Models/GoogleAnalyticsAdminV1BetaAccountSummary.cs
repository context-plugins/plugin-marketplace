using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A virtual resource representing an overview of an account and all its child Google Analytics properties.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccountSummary
{
    /// <summary>
    /// Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public string? Account { get; init; }

    /// <summary>
    /// Identifier. Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Display name for the account referred to in this account summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// List of summaries for child accounts of this account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertySummaries")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaPropertySummary>? PropertySummaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
