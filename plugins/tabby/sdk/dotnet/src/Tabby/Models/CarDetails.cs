using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Required for car insurance
/// </summary>
public record CarDetails
{
    [JsonPropertyName("manufacturer")]
    public required string Manufacturer { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("year")]
    public required string Year { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
