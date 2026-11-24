using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record DeleteMessageBatchRequestEntry
{
    /// <summary>
    /// The identifier for this particular receipt handle. This is used to communicate the result. The Ids of a batch request need to be unique within a request. This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    /// <summary>
    /// A receipt handle.
    /// </summary>
    [JsonPropertyName("ReceiptHandle")]
    public required string ReceiptHandle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
