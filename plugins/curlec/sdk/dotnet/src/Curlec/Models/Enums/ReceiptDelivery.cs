using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReceiptDelivery>))]
public sealed record ReceiptDelivery : OpenStringEnum<ReceiptDelivery>
{
    private ReceiptDelivery(string value) : base(value)
    {
    }

    public static readonly ReceiptDelivery Digital = new("digital");

    public static readonly ReceiptDelivery Print = new("print");

    public static readonly ReceiptDelivery DigitalAndPrint = new("digital_and_print");

    public TResult Match<TResult>(Func<TResult> onDigital,
        Func<TResult> onPrint,
        Func<TResult> onDigitalAndPrint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Digital => onDigital(),
            _ when this == Print => onPrint(),
            _ when this == DigitalAndPrint => onDigitalAndPrint(),
            _ => otherwise(Value)
        };

    public void Match(Action onDigital, Action onPrint, Action onDigitalAndPrint, Action<string> otherwise)
    {
        if (this == Digital) onDigital();
        else if (this == Print) onPrint();
        else if (this == DigitalAndPrint) onDigitalAndPrint();
        else otherwise(Value);
    }
}
