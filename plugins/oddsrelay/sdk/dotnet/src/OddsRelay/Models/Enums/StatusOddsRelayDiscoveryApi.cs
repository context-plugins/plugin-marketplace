using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusOddsRelayDiscoveryApi>))]
public sealed record StatusOddsRelayDiscoveryApi : OpenStringEnum<StatusOddsRelayDiscoveryApi>
{
    private StatusOddsRelayDiscoveryApi(string value) : base(value)
    {
    }

    public static readonly StatusOddsRelayDiscoveryApi Upcoming = new("upcoming");

    public static readonly StatusOddsRelayDiscoveryApi Started = new("started");

    public TResult Match<TResult>(Func<TResult> onUpcoming, Func<TResult> onStarted, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Upcoming => onUpcoming(),
            _ when this == Started => onStarted(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpcoming, Action onStarted, Action<string> otherwise)
    {
        if (this == Upcoming) onUpcoming();
        else if (this == Started) onStarted();
        else otherwise(Value);
    }
}
