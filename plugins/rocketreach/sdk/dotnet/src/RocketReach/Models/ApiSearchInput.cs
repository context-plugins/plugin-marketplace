using System.Text.Json.Serialization;
using RocketReach.Core.Models;
using RocketReach.Core.Validation.Attributes;
using RocketReach.Models.Enums;

namespace RocketReach.Models;

public record ApiSearchInput
{
    /// <summary>
    /// Start index of the request results (counting from 1)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    [Minimum(1)]
    [Maximum(10000)]
    public int? Start { get; init; } = 1;

    /// <summary>
    /// Maximum number of results to return per page [1-100]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_size")]
    [Minimum(1)]
    [Maximum(100)]
    public int? PageSize { get; init; } = 10;

    /// <summary>
    /// Search query object for the request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public PersonQuery1? Query { get; init; }

    /// <summary>
    /// Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_by")]
    public OrderByEnum? OrderBy { get; init; } = OrderByEnum.Relevance;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
