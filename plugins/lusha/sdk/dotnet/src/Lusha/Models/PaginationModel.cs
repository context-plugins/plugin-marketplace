using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

/// <summary>
/// Optional. If omitted, defaults to page 0, size 100.
/// </summary>
public record PaginationModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(0)]
    public int? Page { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(10)]
    [Maximum(100)]
    public int? Size { get; init; } = 100;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
