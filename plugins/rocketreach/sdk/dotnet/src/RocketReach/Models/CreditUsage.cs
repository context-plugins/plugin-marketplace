using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record CreditUsage
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_type")]
    public string? CreditType { get; init; }

    /// <summary>
    /// Value will be 'inf' if infinity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allocated")]
    public int? Allocated { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("used")]
    public int? Used { get; init; }

    /// <summary>
    /// Value will be 'inf' if infinity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
