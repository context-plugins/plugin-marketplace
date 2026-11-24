using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CreateSubscriptionErrorResult
{
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    [JsonPropertyName("success")]
    public string Success { get; } = "False";

    [JsonPropertyName("error")]
    public required Error1 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
