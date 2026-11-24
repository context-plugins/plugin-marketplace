using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SendMessageBatchResult
{
    /// <summary>
    /// A list of SendMessageBatchResultEntry items.
    /// </summary>
    [JsonPropertyName("Successful")]
    public required IReadOnlyList<SendMessageBatchResultEntry> Successful { get; init; }

    /// <summary>
    /// A list of BatchResultErrorEntry items with error details about each message that can't be enqueued.
    /// </summary>
    [JsonPropertyName("Failed")]
    public required IReadOnlyList<BatchResultErrorEntry> Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
