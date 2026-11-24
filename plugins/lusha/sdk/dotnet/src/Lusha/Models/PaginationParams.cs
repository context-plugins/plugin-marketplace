using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record PaginationParams
{
    /// <summary>
    /// Page number (0-1000)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(0.0)]
    [Maximum(1000.0)]
    public double? Page { get; init; } = 0d;

    /// <summary>
    /// Page size (10-50)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(10.0)]
    [Maximum(50.0)]
    public double? Size { get; init; } = 20d;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
