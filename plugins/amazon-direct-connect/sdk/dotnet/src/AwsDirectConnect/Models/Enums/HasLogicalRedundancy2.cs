using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HasLogicalRedundancy2>))]
public sealed record HasLogicalRedundancy2 : OpenStringEnum<HasLogicalRedundancy2>
{
    private HasLogicalRedundancy2(string value) : base(value)
    {
    }

    public static readonly HasLogicalRedundancy2 Unknown = new("unknown");

    public static readonly HasLogicalRedundancy2 Yes = new("yes");

    public static readonly HasLogicalRedundancy2 No = new("no");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onYes,
        Func<TResult> onNo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == Yes => onYes(),
            _ when this == No => onNo(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown, Action onYes, Action onNo, Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == Yes) onYes();
        else if (this == No) onNo();
        else otherwise(Value);
    }
}
