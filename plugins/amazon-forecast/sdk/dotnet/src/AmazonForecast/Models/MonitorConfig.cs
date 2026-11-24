using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record MonitorConfig
{
    /// <summary>
    /// The name of the monitor resource.
    /// </summary>
    [JsonPropertyName("MonitorName")]
    public required string MonitorName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
