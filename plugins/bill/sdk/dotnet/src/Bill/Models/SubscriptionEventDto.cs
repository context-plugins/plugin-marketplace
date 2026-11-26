using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Subscription events information.
/// </summary>
public record SubscriptionEventDto
{
    /// <summary>
    /// Event type
    /// </summary>
    [JsonPropertyName("type")]
    [MinLength(1)]
    public required string Type { get; init; }

    /// <summary>
    /// Event type version
    /// </summary>
    [JsonPropertyName("version")]
    [MinLength(1)]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
