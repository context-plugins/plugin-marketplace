using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Core.Validation.Attributes;

namespace Apibara.Models;

/// <summary>
/// Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown mileage is not zero.
/// </summary>
public record Odometer
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mi")]
    [Minimum(0.0)]
    public double? Mi { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("km")]
    [Minimum(0.0)]
    public double? Km { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
