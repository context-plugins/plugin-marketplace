using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// The action applied when the custom category is matched
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Restriction>))]
public sealed record Restriction : OpenStringEnum<Restriction>
{
    private Restriction(string value) : base(value)
    {
    }

    public static readonly Restriction Allow = new("ALLOW");

    public static readonly Restriction Block = new("BLOCK");

    public static readonly Restriction Warning = new("WARNING");

    public static readonly Restriction Ignore = new("IGNORE");

    public TResult Match<TResult>(Func<TResult> onAllow,
        Func<TResult> onBlock,
        Func<TResult> onWarning,
        Func<TResult> onIgnore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Block => onBlock(),
            _ when this == Warning => onWarning(),
            _ when this == Ignore => onIgnore(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow, Action onBlock, Action onWarning, Action onIgnore, Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Block) onBlock();
        else if (this == Warning) onWarning();
        else if (this == Ignore) onIgnore();
        else otherwise(Value);
    }
}
