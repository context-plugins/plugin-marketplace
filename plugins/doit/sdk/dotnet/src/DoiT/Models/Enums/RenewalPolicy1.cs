using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RenewalPolicy1>))]
public sealed record RenewalPolicy1 : OpenStringEnum<RenewalPolicy1>
{
    private RenewalPolicy1(string value) : base(value)
    {
    }

    public static readonly RenewalPolicy1 Auto = new("auto");

    public static readonly RenewalPolicy1 Manual = new("manual");

    public static readonly RenewalPolicy1 Fixed = new("fixed");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onManual,
        Func<TResult> onFixed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Manual => onManual(),
            _ when this == Fixed => onFixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onManual, Action onFixed, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Manual) onManual();
        else if (this == Fixed) onFixed();
        else otherwise(Value);
    }
}
