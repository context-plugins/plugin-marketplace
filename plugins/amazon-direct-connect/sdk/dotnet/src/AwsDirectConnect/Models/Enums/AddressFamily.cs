using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The address family for the BGP peer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AddressFamily>))]
public sealed record AddressFamily : OpenStringEnum<AddressFamily>
{
    private AddressFamily(string value) : base(value)
    {
    }

    public static readonly AddressFamily Ipv4 = new("ipv4");

    public static readonly AddressFamily Ipv6 = new("ipv6");

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
