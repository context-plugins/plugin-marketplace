using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ChangeMessageVisibilityBatchRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue whose messages' visibility is changed. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// Lists the receipt handles of the messages for which the visibility timeout must be changed.
    /// </summary>
    [JsonPropertyName("Entries")]
    public required IReadOnlyList<ChangeMessageVisibilityBatchRequestEntry> Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
