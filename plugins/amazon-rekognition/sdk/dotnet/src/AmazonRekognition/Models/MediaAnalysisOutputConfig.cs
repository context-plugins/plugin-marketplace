using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record MediaAnalysisOutputConfig
{
    /// <summary>
    /// Specifies the Amazon S3 bucket to contain the output of the media analysis job.
    /// </summary>
    [JsonPropertyName("S3Bucket")]
    public required string S3Bucket { get; init; }

    /// <summary>
    /// Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for storage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("S3KeyPrefix")]
    public string? S3KeyPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
