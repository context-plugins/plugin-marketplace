using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SendMessageBatchRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue to which batched messages are sent. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// A list of SendMessageBatchRequestEntry items.
    /// </summary>
    [JsonPropertyName("Entries")]
    public required IReadOnlyList<SendMessageBatchRequestEntry> Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
