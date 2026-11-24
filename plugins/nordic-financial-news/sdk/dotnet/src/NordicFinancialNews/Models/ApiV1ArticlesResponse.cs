using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1ArticlesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article")]
    public ArticleDetail? Article { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
