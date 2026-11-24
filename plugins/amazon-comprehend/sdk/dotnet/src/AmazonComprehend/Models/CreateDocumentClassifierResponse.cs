using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record CreateDocumentClassifierResponse
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the document classifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentClassifierArn")]
    public string? DocumentClassifierArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
