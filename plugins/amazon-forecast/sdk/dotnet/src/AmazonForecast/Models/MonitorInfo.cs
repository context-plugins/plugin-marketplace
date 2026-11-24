using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record MonitorInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitorArn")]
    public string? MonitorArn { get; init; }

    /// <summary>
    /// The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED UPDATE_IN_PROGRESS CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
