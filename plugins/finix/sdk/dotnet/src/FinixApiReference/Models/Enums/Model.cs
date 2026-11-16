using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The model type of the <c>Device</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Model>))]
public sealed record Model : OpenStringEnum<Model>
{
    private Model(string value) : base(value)
    {
    }

    public static readonly Model IosTapToPay = new("IOS_TAP_TO_PAY");

    public static readonly Model PaxA800 = new("PAX_A800");

    public static readonly Model PaxA920Pro = new("PAX_A920PRO");

    public static readonly Model PaxD135 = new("PAX_D135");

    public static readonly Model PaxIm30 = new("PAX_IM30");

    public TResult Match<TResult>(Func<TResult> onIosTapToPay,
        Func<TResult> onPaxA800,
        Func<TResult> onPaxA920Pro,
        Func<TResult> onPaxD135,
        Func<TResult> onPaxIm30,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IosTapToPay => onIosTapToPay(),
            _ when this == PaxA800 => onPaxA800(),
            _ when this == PaxA920Pro => onPaxA920Pro(),
            _ when this == PaxD135 => onPaxD135(),
            _ when this == PaxIm30 => onPaxIm30(),
            _ => otherwise(Value)
        };

    public void Match(Action onIosTapToPay,
        Action onPaxA800,
        Action onPaxA920Pro,
        Action onPaxD135,
        Action onPaxIm30,
        Action<string> otherwise)
    {
        if (this == IosTapToPay) onIosTapToPay();
        else if (this == PaxA800) onPaxA800();
        else if (this == PaxA920Pro) onPaxA920Pro();
        else if (this == PaxD135) onPaxD135();
        else if (this == PaxIm30) onPaxIm30();
        else otherwise(Value);
    }
}
