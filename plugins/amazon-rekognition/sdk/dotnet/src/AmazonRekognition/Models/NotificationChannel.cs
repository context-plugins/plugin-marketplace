using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record NotificationChannel
{
    /// <summary>
    /// The Amazon SNS topic to which Amazon Rekognition posts the completion status.
    /// </summary>
    [JsonPropertyName("SNSTopicArn")]
    public required string SnsTopicArn { get; init; }

    /// <summary>
    /// The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic.
    /// </summary>
    [JsonPropertyName("RoleArn")]
    public required string RoleArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
