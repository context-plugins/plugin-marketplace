using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A description of a change to a single Google Analytics resource.
/// </summary>
public record GoogleAnalyticsAdminV1BetaChangeHistoryChange
{
    /// <summary>
    /// Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceAfterChange")]
    public GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3? ResourceAfterChange { get; init; }

    /// <summary>
    /// Resource name of the resource whose changes are described by this entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    /// <summary>
    /// Resource contents from before the change was made. If this resource was created in this change, this field will be missing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceBeforeChange")]
    public GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1? ResourceBeforeChange { get; init; }

    /// <summary>
    /// The type of action that changed this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public ActionEnum? Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
