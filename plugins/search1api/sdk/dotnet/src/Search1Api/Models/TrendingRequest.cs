using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

public record TrendingRequest
{
    [JsonPropertyName("search_service")]
    [MinLength(1)]
    public required string SearchService { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_results")]
    [Minimum(1)]
    public int? MaxResults { get; init; }
}
