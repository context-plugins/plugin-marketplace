using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SpendLimitAction>))]
public sealed record SpendLimitAction : OpenStringEnum<SpendLimitAction>
{
    private SpendLimitAction(string value) : base(value)
    {
    }

    public static readonly SpendLimitAction Alert = new("alert");

    public static readonly SpendLimitAction Block = new("block");

    public TResult Match<TResult>(Func<TResult> onAlert, Func<TResult> onBlock, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Alert => onAlert(),
            _ when this == Block => onBlock(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlert, Action onBlock, Action<string> otherwise)
    {
        if (this == Alert) onAlert();
        else if (this == Block) onBlock();
        else otherwise(Value);
    }
}
