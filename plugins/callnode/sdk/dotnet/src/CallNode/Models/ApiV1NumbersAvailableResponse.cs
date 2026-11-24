using System.Collections.Generic;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1NumbersAvailableResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numbers")]
    public IReadOnlyList<AvailableNumber>? Numbers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    /// <summary>
    /// What your account pays for this number type, plan-aware.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricing")]
    public NumberPricing? Pricing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
