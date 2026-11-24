using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record GetQueueUrlRequest
{
    /// <summary>
    /// (Required) The name of the queue for which you want to fetch the URL. The name can be up to 80 characters long and can include alphanumeric characters, hyphens (-), and underscores (_). Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueName")]
    public required string QueueName { get; init; }

    /// <summary>
    /// (Optional) The Amazon Web Services account ID of the account that created the queue. This is only required when you are attempting to access a queue owned by another Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QueueOwnerAWSAccountId")]
    public string? QueueOwnerAwsAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
