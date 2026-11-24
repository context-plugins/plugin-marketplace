using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum General = new("general");

    public static readonly TypeEnum Collect = new("collect");

    public static readonly TypeEnum Fundraise = new("fundraise");

    public static readonly TypeEnum Event = new("event");

    public TResult Match<TResult>(Func<TResult> onGeneral,
        Func<TResult> onCollect,
        Func<TResult> onFundraise,
        Func<TResult> onEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == General => onGeneral(),
            _ when this == Collect => onCollect(),
            _ when this == Fundraise => onFundraise(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneral, Action onCollect, Action onFundraise, Action onEvent, Action<string> otherwise)
    {
        if (this == General) onGeneral();
        else if (this == Collect) onCollect();
        else if (this == Fundraise) onFundraise();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
