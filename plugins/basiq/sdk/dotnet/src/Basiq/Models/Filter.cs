using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;

namespace Basiq.Models;

public record Filter
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("value")]
    public required Value Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
