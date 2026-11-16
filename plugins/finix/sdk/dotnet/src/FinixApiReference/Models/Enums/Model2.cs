using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The model type of the <c>Device</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Model2>))]
public sealed record Model2 : OpenStringEnum<Model2>
{
    private Model2(string value) : base(value)
    {
    }

    public static readonly Model2 IosTapToPay = new("IOS_TAP_TO_PAY");

    public static readonly Model2 PaxA35 = new("PAX_A35");

    public static readonly Model2 PaxA800 = new("PAX_A800");

    public static readonly Model2 PaxA3700 = new("PAX_A3700");

    public static readonly Model2 PaxA920Pro = new("PAX_A920PRO");

    public static readonly Model2 PaxD135 = new("PAX_D135");

    public static readonly Model2 PaxIm30 = new("PAX_IM30");

    public TResult Match<TResult>(Func<TResult> onIosTapToPay,
        Func<TResult> onPaxA35,
        Func<TResult> onPaxA800,
        Func<TResult> onPaxA3700,
        Func<TResult> onPaxA920Pro,
        Func<TResult> onPaxD135,
        Func<TResult> onPaxIm30,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IosTapToPay => onIosTapToPay(),
            _ when this == PaxA35 => onPaxA35(),
            _ when this == PaxA800 => onPaxA800(),
            _ when this == PaxA3700 => onPaxA3700(),
            _ when this == PaxA920Pro => onPaxA920Pro(),
            _ when this == PaxD135 => onPaxD135(),
            _ when this == PaxIm30 => onPaxIm30(),
            _ => otherwise(Value)
        };

    public void Match(Action onIosTapToPay,
        Action onPaxA35,
        Action onPaxA800,
        Action onPaxA3700,
        Action onPaxA920Pro,
        Action onPaxD135,
        Action onPaxIm30,
        Action<string> otherwise)
    {
        if (this == IosTapToPay) onIosTapToPay();
        else if (this == PaxA35) onPaxA35();
        else if (this == PaxA800) onPaxA800();
        else if (this == PaxA3700) onPaxA3700();
        else if (this == PaxA920Pro) onPaxA920Pro();
        else if (this == PaxD135) onPaxD135();
        else if (this == PaxIm30) onPaxIm30();
        else otherwise(Value);
    }
}
