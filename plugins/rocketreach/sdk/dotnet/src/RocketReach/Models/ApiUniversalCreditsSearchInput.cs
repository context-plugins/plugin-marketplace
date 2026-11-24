using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation.Attributes;
using RocketReach.Models.Enums;

namespace RocketReach.Models;

public record ApiUniversalCreditsSearchInput
{
    /// <summary>
    /// Paginate through search results by returning results starting from this value (counting from 1).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    [Minimum(1)]
    [Maximum(10000)]
    public int? Start { get; init; } = 1;

    /// <summary>
    /// Maximum number of search results to return per page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_size")]
    [Minimum(1)]
    [Maximum(100)]
    public int? PageSize { get; init; } = 100;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public PersonQuery? Query { get; init; }

    /// <summary>
    /// Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.
    /// <list type="bullet">
    ///   <item><description><c>relevance</c> - relevance</description></item>
    ///   <item><description><c>popularity</c> - popularity</description></item>
    ///   <item><description><c>score</c> - score</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_by")]
    public OrderByEnum? OrderBy { get; init; } = OrderByEnum.Relevance;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
