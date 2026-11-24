using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SubscriptionsPatchResponse
{
    [JsonPropertyName("data")]
    public required SubscriptionsPatchResponseData Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
