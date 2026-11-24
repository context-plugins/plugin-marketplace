using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeImportRequest
{
    /// <summary>
    /// The unique identifier of the import to describe.
    /// </summary>
    [JsonPropertyName("importId")]
    public required string ImportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
