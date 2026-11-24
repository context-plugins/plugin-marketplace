using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1ArticlesResponse1
{
    [JsonPropertyName("articles")]
    public required IReadOnlyList<ArticleSummary> Articles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginationModel? Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
