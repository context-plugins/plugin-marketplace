using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UsageCheckUsageResponse200
{
    /// <summary>
    /// Whether usage is allowed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowed")]
    public bool? Allowed { get; init; }

    /// <summary>
    /// Human-readable message about the usage check result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Event name (only present when usage is not allowed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    public string? EventName { get; init; }

    /// <summary>
    /// Available credits (only present for PrepaidCredits when insufficient)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public double? Available { get; init; }

    /// <summary>
    /// Current events quantity (only present when usage exceeds limit)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventsQuantity")]
    public double? EventsQuantity { get; init; }

    /// <summary>
    /// Usage limit (only present when usage exceeds limit)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
