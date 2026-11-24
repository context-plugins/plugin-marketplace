using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using S1.Core.Validation.Attributes;

namespace S1.Models;

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
