using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record Articles
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
