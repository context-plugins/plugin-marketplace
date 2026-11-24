using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

/// <summary>
/// The action applied for this user or group
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Restriction5>))]
public sealed record Restriction5 : OpenStringEnum<Restriction5>
{
    private Restriction5(string value) : base(value)
    {
    }

    public static readonly Restriction5 Allow = new("ALLOW");

    public static readonly Restriction5 Block = new("BLOCK");

    public static readonly Restriction5 Warning = new("WARNING");

    public TResult Match<TResult>(Func<TResult> onAllow,
        Func<TResult> onBlock,
        Func<TResult> onWarning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Block => onBlock(),
            _ when this == Warning => onWarning(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow, Action onBlock, Action onWarning, Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Block) onBlock();
        else if (this == Warning) onWarning();
        else otherwise(Value);
    }
}
