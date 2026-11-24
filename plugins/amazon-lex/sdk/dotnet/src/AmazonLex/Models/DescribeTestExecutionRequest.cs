using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeTestExecutionRequest
{
    /// <summary>
    /// The execution Id of the test set execution.
    /// </summary>
    [JsonPropertyName("testExecutionId")]
    public required string TestExecutionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
