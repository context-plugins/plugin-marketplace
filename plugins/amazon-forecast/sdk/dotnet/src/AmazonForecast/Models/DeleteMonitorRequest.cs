using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteMonitorRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource to delete.
    /// </summary>
    [JsonPropertyName("MonitorArn")]
    public required string MonitorArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
