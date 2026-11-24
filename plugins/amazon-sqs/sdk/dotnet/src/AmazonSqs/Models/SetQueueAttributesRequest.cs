using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SetQueueAttributesRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue whose attributes are set. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// A map of attributes to set. The following lists the names, descriptions, and values of the special request parameters that the SetQueueAttributes action uses: DelaySeconds – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0. MaximumMessageSize – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB). MessageRetentionPeriod – The length of time, in s
    /// </summary>
    [JsonPropertyName("Attributes")]
    public required IReadOnlyDictionary<string, string> Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
