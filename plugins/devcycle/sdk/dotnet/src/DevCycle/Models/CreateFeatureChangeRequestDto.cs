using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record CreateFeatureChangeRequestDto
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("method")]
    public string Method { get; } = "PATCH";

    [JsonPropertyName("body")]
    public required object Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
