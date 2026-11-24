using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Specifies the traffic density to use when calculating commute time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RoadTraffic>))]
public sealed record RoadTraffic : OpenStringEnum<RoadTraffic>
{
    private RoadTraffic(string value) : base(value)
    {
    }

    public static readonly RoadTraffic RoadTrafficUnspecified = new("ROAD_TRAFFIC_UNSPECIFIED");

    public static readonly RoadTraffic TrafficFree = new("TRAFFIC_FREE");

    public static readonly RoadTraffic BusyHour = new("BUSY_HOUR");

    public TResult Match<TResult>(Func<TResult> onRoadTrafficUnspecified,
        Func<TResult> onTrafficFree,
        Func<TResult> onBusyHour,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RoadTrafficUnspecified => onRoadTrafficUnspecified(),
            _ when this == TrafficFree => onTrafficFree(),
            _ when this == BusyHour => onBusyHour(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoadTrafficUnspecified,
        Action onTrafficFree,
        Action onBusyHour,
        Action<string> otherwise)
    {
        if (this == RoadTrafficUnspecified) onRoadTrafficUnspecified();
        else if (this == TrafficFree) onTrafficFree();
        else if (this == BusyHour) onBusyHour();
        else otherwise(Value);
    }
}
