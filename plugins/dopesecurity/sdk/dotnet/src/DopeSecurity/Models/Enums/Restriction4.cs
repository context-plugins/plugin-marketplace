using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// Custom categories can be ignored, in addition to regular restrictions
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Restriction4>))]
public sealed record Restriction4 : OpenStringEnum<Restriction4>
{
    private Restriction4(string value) : base(value)
    {
    }

    public static readonly Restriction4 Allow = new("ALLOW");

    public static readonly Restriction4 Block = new("BLOCK");

    public static readonly Restriction4 Warning = new("WARNING");

    public static readonly Restriction4 Ignore = new("IGNORE");

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
