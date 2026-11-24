using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1CompaniesArticlesResponse
{
    [JsonPropertyName("articles")]
    public required IReadOnlyList<ArticleSummary> Articles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginationModel? Pagination { get; init; }

    /// <summary>
    /// Present and <c>true</c> when your plan restricted what this endpoint can return, so the result may be incomplete. Absent when your plan applies no restriction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_limited")]
    public bool? PlanLimited { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
