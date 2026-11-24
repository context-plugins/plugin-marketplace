using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Enable = new("ENABLE");

    public static readonly ActionEnum Disable = new("DISABLE");

    public TResult Match<TResult>(Func<TResult> onEnable, Func<TResult> onDisable, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enable => onEnable(),
            _ when this == Disable => onDisable(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnable, Action onDisable, Action<string> otherwise)
    {
        if (this == Enable) onEnable();
        else if (this == Disable) onDisable();
        else otherwise(Value);
    }
}
