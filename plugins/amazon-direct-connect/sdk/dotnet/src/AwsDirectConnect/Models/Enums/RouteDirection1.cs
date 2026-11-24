using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The direction of the route. The valid values are accepted (received from the customer network) and advertised (advertised to the customer network).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RouteDirection1>))]
public sealed record RouteDirection1 : OpenStringEnum<RouteDirection1>
{
    private RouteDirection1(string value) : base(value)
    {
    }

    public static readonly RouteDirection1 Accepted = new("accepted");

    public static readonly RouteDirection1 Advertised = new("advertised");

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
