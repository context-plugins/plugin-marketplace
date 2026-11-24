using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Stats for this complimentary access. Retrievable by including <c>expand: [stats]</c> in the request.
/// </summary>
public record ComplimentaryAccessStats2
{
    /// <summary>
    /// Total number of subscriptions that have ever been granted this complimentary access.
    /// </summary>
    [JsonPropertyName("total_granted")]
    public required int TotalGranted { get; init; }

    /// <summary>
    /// Number of subscriptions currently within an active complimentary access period.
    /// </summary>
    [JsonPropertyName("active_granted")]
    public required int ActiveGranted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
