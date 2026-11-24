using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DeleteDocumentClassifierRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the document classifier.
    /// </summary>
    [JsonPropertyName("DocumentClassifierArn")]
    public required string DocumentClassifierArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
