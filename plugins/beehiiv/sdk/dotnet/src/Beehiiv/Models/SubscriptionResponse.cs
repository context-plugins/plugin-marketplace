using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The response containing subscription data
/// </summary>
public record SubscriptionResponse
{
    /// <summary>
    /// The subscription object
    /// </summary>
    [JsonPropertyName("data")]
    public required Subscription Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
