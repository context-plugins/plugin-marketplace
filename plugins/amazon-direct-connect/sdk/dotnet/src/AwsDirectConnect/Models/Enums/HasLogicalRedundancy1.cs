using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HasLogicalRedundancy1>))]
public sealed record HasLogicalRedundancy1 : OpenStringEnum<HasLogicalRedundancy1>
{
    private HasLogicalRedundancy1(string value) : base(value)
    {
    }

    public static readonly HasLogicalRedundancy1 Unknown = new("unknown");

    public static readonly HasLogicalRedundancy1 Yes = new("yes");

    public static readonly HasLogicalRedundancy1 No = new("no");

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
