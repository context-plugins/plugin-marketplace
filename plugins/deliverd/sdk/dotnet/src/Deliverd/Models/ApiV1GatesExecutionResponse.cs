using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GatesExecutionResponse
{
    [JsonPropertyName("receipt")]
    public required Receipt Receipt { get; init; }

    [JsonPropertyName("gate")]
    public required Gate Gate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
