using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record RemovePermissionRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue from which permissions are removed. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The identification of the permission to remove. This is the label added using the AddPermission action.
    /// </summary>
    [JsonPropertyName("Label")]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
