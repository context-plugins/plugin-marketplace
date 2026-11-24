using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ListMediaAnalysisJobsRequest
{
    /// <summary>
    /// Pagination token, if the previous response was incomplete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results to return per paginated call. The largest value user can specify is 100. If user specifies a value greater than 100, an InvalidParameterException error occurs. The default value is 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
