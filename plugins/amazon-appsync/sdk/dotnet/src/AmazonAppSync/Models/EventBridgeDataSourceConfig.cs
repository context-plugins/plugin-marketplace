using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record EventBridgeDataSourceConfig
{
    /// <summary>
    /// The ARN of the event bus. For more information about event buses, see Amazon EventBridge event buses.
    /// </summary>
    [JsonPropertyName("eventBusArn")]
    public required string EventBusArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
