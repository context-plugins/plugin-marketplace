using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The address family of the route. The valid values are ipv4 and ipv6.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AddressFamily6>))]
public sealed record AddressFamily6 : OpenStringEnum<AddressFamily6>
{
    private AddressFamily6(string value) : base(value)
    {
    }

    public static readonly AddressFamily6 Ipv4 = new("ipv4");

    public static readonly AddressFamily6 Ipv6 = new("ipv6");

    public TResult Match<TResult>(Func<TResult> onIpv4, Func<TResult> onIpv6, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ipv4 => onIpv4(),
            _ when this == Ipv6 => onIpv6(),
            _ => otherwise(Value)
        };

    public void Match(Action onIpv4, Action onIpv6, Action<string> otherwise)
    {
        if (this == Ipv4) onIpv4();
        else if (this == Ipv6) onIpv6();
        else otherwise(Value);
    }
}
