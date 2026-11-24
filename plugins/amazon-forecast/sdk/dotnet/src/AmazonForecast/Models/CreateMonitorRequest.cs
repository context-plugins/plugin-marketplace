using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateMonitorRequest
{
    /// <summary>
    /// The name of the monitor resource.
    /// </summary>
    [JsonPropertyName("MonitorName")]
    public required string MonitorName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the predictor to monitor.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A list of tags to apply to the monitor resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
