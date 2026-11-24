using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;
using AmazonSqs.Models.Enums;

namespace AmazonSqs.Models;

public record GetQueueAttributesRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue whose attribute information is retrieved. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// A list of attributes for which to retrieve information. The AttributeNames parameter is optional, but if you don't specify values for this parameter, the request returns empty results. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully. The following attributes are supported: The ApproximateNumberOfMessagesDelayed, ApproximateNumberOfMessagesNotVisible, and ApproximateNumberOfMessages metrics may not achieve consistency until at least 1 minute after the producers stop
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AttributeNames")]
    public IReadOnlyList<AttributeName>? AttributeNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
