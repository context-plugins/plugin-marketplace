using System;
using System.Text.Json.Serialization;
using Buildkite.Core.Enum;

namespace Buildkite.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Script = new("script");

    public static readonly TypeEnum Waiter = new("waiter");

    public static readonly TypeEnum Manual = new("manual");

    public static readonly TypeEnum Trigger = new("trigger");

    public static readonly TypeEnum Block = new("block");

    public TResult Match<TResult>(Func<TResult> onScript,
        Func<TResult> onWaiter,
        Func<TResult> onManual,
        Func<TResult> onTrigger,
        Func<TResult> onBlock,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Script => onScript(),
            _ when this == Waiter => onWaiter(),
            _ when this == Manual => onManual(),
            _ when this == Trigger => onTrigger(),
            _ when this == Block => onBlock(),
            _ => otherwise(Value)
        };

    public void Match(Action onScript,
        Action onWaiter,
        Action onManual,
        Action onTrigger,
        Action onBlock,
        Action<string> otherwise)
    {
        if (this == Script) onScript();
        else if (this == Waiter) onWaiter();
        else if (this == Manual) onManual();
        else if (this == Trigger) onTrigger();
        else if (this == Block) onBlock();
        else otherwise(Value);
    }
}
