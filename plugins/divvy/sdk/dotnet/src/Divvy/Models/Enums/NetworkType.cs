using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for different types of network.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NetworkType>))]
public sealed record NetworkType : OpenStringEnum<NetworkType>
{
    private NetworkType(string value) : base(value)
    {
    }

    public static readonly NetworkType Bill = new("BILL");

    public static readonly NetworkType Rpps = new("RPPS");

    public TResult Match<TResult>(Func<TResult> onBill, Func<TResult> onRpps, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bill => onBill(),
            _ when this == Rpps => onRpps(),
            _ => otherwise(Value)
        };

    public void Match(Action onBill, Action onRpps, Action<string> otherwise)
    {
        if (this == Bill) onBill();
        else if (this == Rpps) onRpps();
        else otherwise(Value);
    }
}
