using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record AddPermissionRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue to which permissions are added. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The unique identification of the permission you're setting (for example, AliceSendMessage). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (-), and underscores (_).
    /// </summary>
    [JsonPropertyName("Label")]
    public required string Label { get; init; }

    /// <summary>
    /// The Amazon Web Services account numbers of the principals who are to receive permission. For information about locating the Amazon Web Services account identification, see Your Amazon Web Services Identifiers in the Amazon SQS Developer Guide.
    /// </summary>
    [JsonPropertyName("AWSAccountIds")]
    public required IReadOnlyList<string> AwsAccountIds { get; init; }

    /// <summary>
    /// The action the client wants to allow for the specified principal. Valid values: the name of any action or *. For more information about these actions, see Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource in the Amazon SQS Developer Guide. Specifying SendMessage, DeleteMessage, or ChangeMessageVisibility for ActionName.n also grants permissions for the corresponding batch versions of those actions: SendMessageBatch, DeleteMessageBatch, and ChangeMessageVisibilityBatch.
    /// </summary>
    [JsonPropertyName("Actions")]
    public required IReadOnlyList<string> Actions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
