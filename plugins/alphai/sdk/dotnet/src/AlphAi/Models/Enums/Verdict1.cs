using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verdict1>))]
public sealed record Verdict1 : OpenStringEnum<Verdict1>
{
    private Verdict1(string value) : base(value)
    {
    }

    public static readonly Verdict1 Above = new("above");

    public static readonly Verdict1 InLine = new("in line");

    public static readonly Verdict1 Below = new("below");

    public static readonly Verdict1 Na = new("n/a");

    public TResult Match<TResult>(Func<TResult> onAbove,
        Func<TResult> onInLine,
        Func<TResult> onBelow,
        Func<TResult> onNa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Above => onAbove(),
            _ when this == InLine => onInLine(),
            _ when this == Below => onBelow(),
            _ when this == Na => onNa(),
            _ => otherwise(Value)
        };

    public void Match(Action onAbove, Action onInLine, Action onBelow, Action onNa, Action<string> otherwise)
    {
        if (this == Above) onAbove();
        else if (this == InLine) onInLine();
        else if (this == Below) onBelow();
        else if (this == Na) onNa();
        else otherwise(Value);
    }
}
