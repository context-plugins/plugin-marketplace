using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartMediaAnalysisJobRequest
{
    /// <summary>
    /// Idempotency token used to prevent the accidental creation of duplicate versions. If you use the same token with multiple StartMediaAnalysisJobRequest requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// The name of the job. Does not have to be unique.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobName")]
    public string? JobName { get; init; }

    [JsonPropertyName("OperationsConfig")]
    public required MediaAnalysisOperationsConfig OperationsConfig { get; init; }

    [JsonPropertyName("Input")]
    public required MediaAnalysisInput Input { get; init; }

    [JsonPropertyName("OutputConfig")]
    public required MediaAnalysisOutputConfig OutputConfig { get; init; }

    /// <summary>
    /// The identifier of customer managed AWS KMS key (name or ARN). The key is used to encrypt images copied into the service. The key is also used to encrypt results and manifest files written to the output Amazon S3 bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
