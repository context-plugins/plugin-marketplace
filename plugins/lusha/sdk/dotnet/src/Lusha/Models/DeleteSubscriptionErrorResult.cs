using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record DeleteSubscriptionErrorResult
{
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    [JsonPropertyName("success")]
    public string Success { get; } = "False";

    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
