using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A snapshot of a data retention settings resource in change history.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataRetentionSettings2
{
    /// <summary>
    /// Identifier. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. The length of time that user-level data is retained.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userDataRetention")]
    public UserDataRetention? UserDataRetention { get; init; }

    /// <summary>
    /// Required. The length of time that event-level data is retained.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventDataRetention")]
    public EventDataRetention? EventDataRetention { get; init; }

    /// <summary>
    /// If true, reset the retention period for the user identifier with every event from that user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resetUserDataOnNewActivity")]
    public bool? ResetUserDataOnNewActivity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
