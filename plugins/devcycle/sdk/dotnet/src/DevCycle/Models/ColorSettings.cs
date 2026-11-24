using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ColorSettings
{
    [JsonPropertyName("primary")]
    public required string Primary { get; init; }

    [JsonPropertyName("secondary")]
    public required string Secondary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
