using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayQrCodesApi>))]
public sealed record EntityRazorpayQrCodesApi : OpenStringEnum<EntityRazorpayQrCodesApi>
{
    private EntityRazorpayQrCodesApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayQrCodesApi QrCode = new("qr_code");

    public TResult Match<TResult>(Func<TResult> onQrCode, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == QrCode => onQrCode(),
            _ => otherwise(Value)
        };

    public void Match(Action onQrCode, Action<string> otherwise)
    {
        if (this == QrCode) onQrCode();
        else otherwise(Value);
    }
}
