using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// RI offering class.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OfferingClass>))]
public sealed record OfferingClass : OpenStringEnum<OfferingClass>
{
    private OfferingClass(string value) : base(value)
    {
    }

    public static readonly OfferingClass Standard = new("standard");

    public static readonly OfferingClass Convertible = new("convertible");

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
