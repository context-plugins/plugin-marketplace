using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeEventsDetectionJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventsDetectionJobProperties")]
    public EventsDetectionJobProperties? EventsDetectionJobProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
