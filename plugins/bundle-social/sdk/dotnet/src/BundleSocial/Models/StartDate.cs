using System.Text.Json.Serialization;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record StartDate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public int? Year { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    [Minimum(1)]
    [Maximum(12)]
    public int? Month { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    [Minimum(1)]
    [Maximum(31)]
    public int? Day { get; init; }
}
