using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ChangeMessageVisibilityRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue whose message's visibility is changed. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the ReceiveMessage action.
    /// </summary>
    [JsonPropertyName("ReceiptHandle")]
    public required string ReceiptHandle { get; init; }

    /// <summary>
    /// The new value for the message's visibility timeout (in seconds). Values range: 0 to 43200. Maximum: 12 hours.
    /// </summary>
    [JsonPropertyName("VisibilityTimeout")]
    public required int VisibilityTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
