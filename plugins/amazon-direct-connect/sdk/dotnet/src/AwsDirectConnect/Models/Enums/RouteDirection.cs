using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The direction of the routes to return. The valid values are accepted (routes received from the customer network) and advertised (routes advertised to the customer network).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RouteDirection>))]
public sealed record RouteDirection : OpenStringEnum<RouteDirection>
{
    private RouteDirection(string value) : base(value)
    {
    }

    public static readonly RouteDirection Accepted = new("accepted");

    public static readonly RouteDirection Advertised = new("advertised");

    public TResult Match<TResult>(Func<TResult> onAccepted,
        Func<TResult> onAdvertised,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == Advertised => onAdvertised(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted, Action onAdvertised, Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == Advertised) onAdvertised();
        else otherwise(Value);
    }
}
