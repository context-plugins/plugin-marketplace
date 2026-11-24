using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Coupon1
{
    [JsonPropertyName("percentOff")]
    public required double PercentOff { get; init; }

    [JsonPropertyName("duration")]
    public required Duration Duration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationInMonths")]
    public double? DurationInMonths { get; init; }

    [JsonPropertyName("valid")]
    public required bool Valid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
