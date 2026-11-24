using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Basiq.Models;

public record Information
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("attributeList")]
    public required IReadOnlyList<string> AttributeList { get; init; }
}
