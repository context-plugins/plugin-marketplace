using System.Text.Json.Serialization;
using CompSniper.Models.AnyOf;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record Package
{
    /// <summary>
    /// Select custom unless the shipment will use the exact named carrier packaging.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; } = Type1.Custom;

    [JsonPropertyName("weight")]
    public required Weight2 Weight { get; init; }

    [JsonPropertyName("dimensions")]
    public required Dimensions Dimensions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("irregular")]
    public bool? Irregular { get; init; } = false;
}
