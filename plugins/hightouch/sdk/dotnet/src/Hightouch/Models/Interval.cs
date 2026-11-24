using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record Interval
{
    [JsonPropertyName("unit")]
    public required IntervalUnit Unit { get; init; }

    [JsonPropertyName("quantity")]
    public required double Quantity { get; init; }
}
