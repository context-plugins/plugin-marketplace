using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record GetSegmentDetectionRequest
{
    /// <summary>
    /// Job identifier for the text detection operation for which you want results returned. You get the job identifer from an initial call to StartSegmentDetection.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    /// <summary>
    /// Maximum number of results to return per paginated call. The largest value you can specify is 1000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
