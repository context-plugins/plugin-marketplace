using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetTestExecutionArtifactsUrlRequest
{
    /// <summary>
    /// The unique identifier of the completed test execution.
    /// </summary>
    [JsonPropertyName("testExecutionId")]
    public required string TestExecutionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
