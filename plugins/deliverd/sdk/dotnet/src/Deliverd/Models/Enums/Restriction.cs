using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Restriction>))]
public sealed record Restriction : OpenStringEnum<Restriction>
{
    private Restriction(string value) : base(value)
    {
    }

    public static readonly Restriction Audit = new("audit");

    public static readonly Restriction Warn = new("warn");

    public static readonly Restriction Block = new("block");

    public TResult Match<TResult>(Func<TResult> onAudit,
        Func<TResult> onWarn,
        Func<TResult> onBlock,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Audit => onAudit(),
            _ when this == Warn => onWarn(),
            _ when this == Block => onBlock(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudit, Action onWarn, Action onBlock, Action<string> otherwise)
    {
        if (this == Audit) onAudit();
        else if (this == Warn) onWarn();
        else if (this == Block) onBlock();
        else otherwise(Value);
    }
}
