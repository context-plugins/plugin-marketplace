using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record OutputConfig
{
    /// <summary>
    /// The S3 bucket where training output is placed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("S3Bucket")]
    public string? S3Bucket { get; init; }

    /// <summary>
    /// The prefix applied to the training output files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("S3KeyPrefix")]
    public string? S3KeyPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
