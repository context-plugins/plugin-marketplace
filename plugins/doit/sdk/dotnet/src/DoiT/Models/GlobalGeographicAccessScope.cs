using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record GlobalGeographicAccessScope
{
    /// <summary>
    /// All countries and custom regions are allowed.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "global";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
