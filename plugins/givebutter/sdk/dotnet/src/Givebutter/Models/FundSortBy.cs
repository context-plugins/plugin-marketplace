using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Models.Enums;

namespace Givebutter.Models;

/// <summary>
/// Fund sort order. One of <c>order_asc</c>, <c>name_asc</c>, <c>created_at_desc</c>.
/// </summary>
public record FundSortBy
{
    [JsonPropertyName("name")]
    public string Name { get; } = "fund_sort_by";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public Value? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
