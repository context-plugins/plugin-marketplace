using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation.Attributes;

namespace Surfe.Models;

public record RecommendationsFetchRequest
{
    /// <summary>
    /// Maximum number of recommendations to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(200)]
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination token from a previous response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
