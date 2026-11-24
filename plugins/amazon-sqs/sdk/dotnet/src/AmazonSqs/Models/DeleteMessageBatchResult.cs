using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record DeleteMessageBatchResult
{
    /// <summary>
    /// A list of DeleteMessageBatchResultEntry items.
    /// </summary>
    [JsonPropertyName("Successful")]
    public required IReadOnlyList<DeleteMessageBatchResultEntry> Successful { get; init; }

    /// <summary>
    /// A list of BatchResultErrorEntry items.
    /// </summary>
    [JsonPropertyName("Failed")]
    public required IReadOnlyList<BatchResultErrorEntry> Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
