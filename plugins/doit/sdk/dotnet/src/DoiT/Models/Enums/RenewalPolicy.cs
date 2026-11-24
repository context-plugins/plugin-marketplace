using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The renewal policy.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenewalPolicy>))]
public sealed record RenewalPolicy : OpenStringEnum<RenewalPolicy>
{
    private RenewalPolicy(string value) : base(value)
    {
    }

    public static readonly RenewalPolicy Auto = new("auto");

    public static readonly RenewalPolicy Manual = new("manual");

    public static readonly RenewalPolicy Fixed = new("fixed");

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
