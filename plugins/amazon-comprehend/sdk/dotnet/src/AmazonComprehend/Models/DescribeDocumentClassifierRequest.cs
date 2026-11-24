using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeDocumentClassifierRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the document classifier. The CreateDocumentClassifier operation returns this identifier in its response.
    /// </summary>
    [JsonPropertyName("DocumentClassifierArn")]
    public required string DocumentClassifierArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
