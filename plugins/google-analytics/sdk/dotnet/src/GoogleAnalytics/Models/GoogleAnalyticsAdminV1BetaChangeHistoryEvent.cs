using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
/// </summary>
public record GoogleAnalyticsAdminV1BetaChangeHistoryEvent
{
    /// <summary>
    /// ID of this change history event. This ID is unique across Google Analytics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Time when change was made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changeTime")]
    public string? ChangeTime { get; init; }

    /// <summary>
    /// The type of actor that made this change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actorType")]
    public ActorType? ActorType { get; init; }

    /// <summary>
    /// Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userActorEmail")]
    public string? UserActorEmail { get; init; }

    /// <summary>
    /// If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changesFiltered")]
    public bool? ChangesFiltered { get; init; }

    /// <summary>
    /// A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changes")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaChangeHistoryChange>? Changes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
