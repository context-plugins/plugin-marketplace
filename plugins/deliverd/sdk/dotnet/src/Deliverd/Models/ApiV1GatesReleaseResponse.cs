using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GatesReleaseResponse
{
    [JsonPropertyName("receipt")]
    public required Receipt Receipt { get; init; }

    [JsonPropertyName("gate")]
    public required Gate Gate { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
