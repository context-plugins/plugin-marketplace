using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record DeleteMessageRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The receipt handle associated with the message to delete.
    /// </summary>
    [JsonPropertyName("ReceiptHandle")]
    public required string ReceiptHandle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
