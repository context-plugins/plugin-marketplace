using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record DeleteMessageBatchRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// Lists the receipt handles for the messages to be deleted.
    /// </summary>
    [JsonPropertyName("Entries")]
    public required IReadOnlyList<DeleteMessageBatchRequestEntry> Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
