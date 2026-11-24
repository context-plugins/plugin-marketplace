using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record LivenessOutputConfig
{
    /// <summary>
    /// The path to an AWS Amazon S3 bucket used to store Face Liveness session results.
    /// </summary>
    [JsonPropertyName("S3Bucket")]
    public required string S3Bucket { get; init; }

    /// <summary>
    /// The prefix prepended to the output files for the Face Liveness session results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("S3KeyPrefix")]
    public string? S3KeyPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
