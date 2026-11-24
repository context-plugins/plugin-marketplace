using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OfferingClass1>))]
public sealed record OfferingClass1 : OpenStringEnum<OfferingClass1>
{
    private OfferingClass1(string value) : base(value)
    {
    }

    public static readonly OfferingClass1 Standard = new("standard");

    public static readonly OfferingClass1 Convertible = new("convertible");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onConvertible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Convertible => onConvertible(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onConvertible, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Convertible) onConvertible();
        else otherwise(Value);
    }
}
