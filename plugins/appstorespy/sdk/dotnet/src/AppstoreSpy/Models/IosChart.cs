using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record IosChart
{
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    [JsonPropertyName("collection")]
    public required string Collection { get; init; }

    [JsonPropertyName("category")]
    public required string Category { get; init; }

    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
