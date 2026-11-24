using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeTestSetRequest
{
    /// <summary>
    /// The test set Id for the test set request.
    /// </summary>
    [JsonPropertyName("testSetId")]
    public required string TestSetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
