using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Config for scheduling the resources to be allocated when available.
/// </summary>
public record SchedulingConfig2
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
