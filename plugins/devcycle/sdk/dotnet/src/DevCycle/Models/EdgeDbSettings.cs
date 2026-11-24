using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record EdgeDbSettings
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
