using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Variant within a message variable (Public API)
/// </summary>
public record DecisionEngineVariableVariant
{
    /// <summary>
    /// The default (non-localized) value for this variant
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    /// <summary>
    /// Key-value tags for categorizing this variant
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    /// <summary>
    /// Earliest date this variant is eligible to be sent (ISO 8601)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstEligibleSendDate")]
    public string? FirstEligibleSendDate { get; init; }

    /// <summary>
    /// Latest date this variant is eligible to be sent (ISO 8601)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastEligibleSendDate")]
    public string? LastEligibleSendDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userAudienceFilter")]
    public object? UserAudienceFilter { get; init; }

    /// <summary>
    /// Localized values for this variant, keyed by locale code (e.g. "en-US", "de-DE").
    /// These are only used at runtime when <c>localizationEnabled</c> is true on the parent variable.
    /// You can stage translations by providing localeValues while leaving localizationEnabled unset or false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeValues")]
    public IReadOnlyDictionary<string, string>? LocaleValues { get; init; }
}
