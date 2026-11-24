using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetExportSpecification
{
    /// <summary>
    /// The unique identifier of the test set.
    /// </summary>
    [JsonPropertyName("testSetId")]
    public required string TestSetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
