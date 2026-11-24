using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Current usage and limits for this feature
/// </summary>
public record PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage
{
    /// <summary>
    /// The event name used to track usage for this feature
    /// </summary>
    [JsonPropertyName("eventName")]
    public required string? EventName { get; init; }

    /// <summary>
    /// The current usage quantity for this feature on the order
    /// </summary>
    [JsonPropertyName("currentUsage")]
    public required int CurrentUsage { get; init; }

    /// <summary>
    /// The usage limit for this feature (null if unlimited)
    /// </summary>
    [JsonPropertyName("limit")]
    public required int? Limit { get; init; }

    /// <summary>
    /// Whether this feature has unlimited usage
    /// </summary>
    [JsonPropertyName("isUnlimited")]
    public required bool IsUnlimited { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
