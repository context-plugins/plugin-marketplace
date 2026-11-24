using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

/// <summary>
/// Canonical model-family / series resolved from the generation catalog.
/// </summary>
public record VehicleSeries
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
