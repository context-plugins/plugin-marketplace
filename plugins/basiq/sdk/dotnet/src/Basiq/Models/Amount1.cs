using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Amount1
{
    /// <summary>
    /// Total amount for the subgroup
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public string? Total { get; init; }

    /// <summary>
    /// Minimum amount for the subgroup
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min")]
    public string? Min { get; init; }

    /// <summary>
    /// Maximum amount for the subgroup
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public string? Max { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average")]
    public Average? Average { get; init; }

    /// <summary>
    /// Number of stable months
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stableMonths")]
    public int? StableMonths { get; init; }

    /// <summary>
    /// Number of secure months
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secureMonths")]
    public int? SecureMonths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
