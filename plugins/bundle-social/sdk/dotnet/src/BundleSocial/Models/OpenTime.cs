using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record OpenTime
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hours")]
    [Minimum(0)]
    [Maximum(23)]
    public int? Hours { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minutes")]
    [Minimum(0)]
    [Maximum(59)]
    public int? Minutes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seconds")]
    [Minimum(0)]
    [Maximum(59)]
    public int? Seconds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nanos")]
    [Minimum(0)]
    [Maximum(999999999)]
    public int? Nanos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
