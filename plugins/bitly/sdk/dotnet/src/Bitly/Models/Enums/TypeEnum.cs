using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Bitlink = new("bitlink");

    public static readonly TypeEnum QrCode = new("qr_code");

    public TResult Match<TResult>(Func<TResult> onBitlink, Func<TResult> onQrCode, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bitlink => onBitlink(),
            _ when this == QrCode => onQrCode(),
            _ => otherwise(Value)
        };

    public void Match(Action onBitlink, Action onQrCode, Action<string> otherwise)
    {
        if (this == Bitlink) onBitlink();
        else if (this == QrCode) onQrCode();
        else otherwise(Value);
    }
}
