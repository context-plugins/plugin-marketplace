using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetTestExecutionArtifactsUrlResponse
{
    /// <summary>
    /// The unique identifier of the completed test execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutionId")]
    public string? TestExecutionId { get; init; }

    /// <summary>
    /// The pre-signed Amazon S3 URL to download completed test execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloadArtifactsUrl")]
    public string? DownloadArtifactsUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
