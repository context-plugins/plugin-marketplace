using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

/// <summary>
/// What a fail means: block = do not engage, warn = verify first, info = never changes the recommendation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Block = new("block");

    public static readonly Severity Warn = new("warn");

    public static readonly Severity Info = new("info");

    public TResult Match<TResult>(Func<TResult> onBlock,
        Func<TResult> onWarn,
        Func<TResult> onInfo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Block => onBlock(),
            _ when this == Warn => onWarn(),
            _ when this == Info => onInfo(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlock, Action onWarn, Action onInfo, Action<string> otherwise)
    {
        if (this == Block) onBlock();
        else if (this == Warn) onWarn();
        else if (this == Info) onInfo();
        else otherwise(Value);
    }
}
