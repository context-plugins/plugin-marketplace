using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeTestSetGenerationRequest
{
    /// <summary>
    /// The unique identifier of the test set generation.
    /// </summary>
    [JsonPropertyName("testSetGenerationId")]
    public required string TestSetGenerationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
