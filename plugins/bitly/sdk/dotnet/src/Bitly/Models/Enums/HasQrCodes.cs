using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<HasQrCodes>))]
public sealed record HasQrCodes : OpenStringEnum<HasQrCodes>
{
    private HasQrCodes(string value) : base(value)
    {
    }

    public static readonly HasQrCodes On = new("on");

    public static readonly HasQrCodes Off = new("off");

    public static readonly HasQrCodes Both = new("both");

    public TResult Match<TResult>(Func<TResult> onOn,
        Func<TResult> onOff,
        Func<TResult> onBoth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == On => onOn(),
            _ when this == Off => onOff(),
            _ when this == Both => onBoth(),
            _ => otherwise(Value)
        };

    public void Match(Action onOn, Action onOff, Action onBoth, Action<string> otherwise)
    {
        if (this == On) onOn();
        else if (this == Off) onOff();
        else if (this == Both) onBoth();
        else otherwise(Value);
    }
}
