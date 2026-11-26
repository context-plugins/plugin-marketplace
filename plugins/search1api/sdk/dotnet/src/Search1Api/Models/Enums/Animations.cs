using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Animations>))]
public sealed record Animations : OpenStringEnum<Animations>
{
    private Animations(string value) : base(value)
    {
    }

    public static readonly Animations Disabled = new("disabled");

    public static readonly Animations Allow = new("allow");

    public TResult Match<TResult>(Func<TResult> onDisabled, Func<TResult> onAllow, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == Allow => onAllow(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled, Action onAllow, Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == Allow) onAllow();
        else otherwise(Value);
    }
}
