using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Config for scheduling the request to create Compute Engine resources for the cluster, when available.
/// </summary>
public record SchedulingConfig
{
    /// <summary>
    /// Optional. Required lifetime of the resources, once provisioned. Min 10 mins, Max/Default 7 days . Note that the cluster can still be deleted before reaching this time. This time is a maximum amount of time before the cluster is forcibly deleted. Lower times are more likely to start running sooner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestedRunDuration")]
    public string? RequestedRunDuration { get; init; }

    /// <summary>
    /// Optional. How long to wait for worker resources to be allocated before failing the cluster creation request. Max/Default value: 13 days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulingTimeout")]
    public string? SchedulingTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
