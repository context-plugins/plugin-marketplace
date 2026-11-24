using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeDocumentClassificationJobRequest
{
    /// <summary>
    /// The identifier that Amazon Comprehend generated for the job. The StartDocumentClassificationJob operation returns this identifier in its response.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
