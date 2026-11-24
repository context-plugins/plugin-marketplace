using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConversationLogsRequest
{
    /// <summary>
    /// The settings for your conversation logs. You can log the conversation text, conversation audio, or both.
    /// </summary>
    [JsonPropertyName("logSettings")]
    public required IReadOnlyList<LogSettingsRequest> LogSettings { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs for text logs and your S3 bucket for audio logs. If audio encryption is enabled, this role also provides access permission for the AWS KMS key used for encrypting audio logs. For more information, see Creating an IAM Role and Policy for Conversation Logs.
    /// </summary>
    [JsonPropertyName("iamRoleArn")]
    public required string IamRoleArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
