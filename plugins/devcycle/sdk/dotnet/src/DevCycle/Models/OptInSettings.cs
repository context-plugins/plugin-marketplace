using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record OptInSettings
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("imageURL")]
    public required string ImageUrl { get; init; }

    [JsonPropertyName("colors")]
    public required ColorSettings Colors { get; init; }

    [JsonPropertyName("poweredByAlignment")]
    public required object PoweredByAlignment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
