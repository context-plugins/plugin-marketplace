using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record DeleteSubscriptionSuccessResult
{
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    [JsonPropertyName("success")]
    public string Success { get; } = "True";

    [JsonPropertyName("subscription")]
    public required Subscription Subscription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
