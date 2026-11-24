using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record PricingEntry
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public double? Credits { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("perQuantity")]
    public double? PerQuantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
