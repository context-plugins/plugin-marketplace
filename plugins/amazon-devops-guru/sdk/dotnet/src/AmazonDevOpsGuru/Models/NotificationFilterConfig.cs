using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record NotificationFilterConfig
{
    /// <summary>
    /// The severity levels that you want to receive notifications for. For example, you can choose to receive notifications only for insights with HIGH and MEDIUM severity levels. For more information, see Understanding insight severities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Severities")]
    public IReadOnlyList<SeverityAmazonDevOpsGuruChannelsApi>? Severities { get; init; }

    /// <summary>
    /// The events that you want to receive notifications for. For example, you can choose to receive notifications only when the severity level is upgraded or a new insight is created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageTypes")]
    public IReadOnlyList<MessageType>? MessageTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
