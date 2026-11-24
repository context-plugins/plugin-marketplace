using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record IntervalSchedule
{
    [JsonPropertyName("interval")]
    public required Interval Interval { get; init; }
}
