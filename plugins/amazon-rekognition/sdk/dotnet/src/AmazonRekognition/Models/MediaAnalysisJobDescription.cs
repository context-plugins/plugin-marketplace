using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record MediaAnalysisJobDescription
{
    /// <summary>
    /// The identifier for a media analysis job.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    /// <summary>
    /// The name of a media analysis job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobName")]
    public string? JobName { get; init; }

    [JsonPropertyName("OperationsConfig")]
    public required MediaAnalysisOperationsConfig OperationsConfig { get; init; }

    /// <summary>
    /// The status of the media analysis job being retrieved.
    /// </summary>
    [JsonPropertyName("Status")]
    public required Status1 Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureDetails")]
    public MediaAnalysisJobFailureDetails? FailureDetails { get; init; }

    /// <summary>
    /// The Unix date and time when the job was started.
    /// </summary>
    [JsonPropertyName("CreationTimestamp")]
    public required DateTimeOffset CreationTimestamp { get; init; }

    /// <summary>
    /// The Unix date and time when the job finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTimestamp")]
    public DateTimeOffset? CompletionTimestamp { get; init; }

    [JsonPropertyName("Input")]
    public required MediaAnalysisInput Input { get; init; }

    [JsonPropertyName("OutputConfig")]
    public required MediaAnalysisOutputConfig OutputConfig { get; init; }

    /// <summary>
    /// KMS Key that was provided in the creation request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Results")]
    public MediaAnalysisResults? Results { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManifestSummary")]
    public MediaAnalysisManifestSummary? ManifestSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
