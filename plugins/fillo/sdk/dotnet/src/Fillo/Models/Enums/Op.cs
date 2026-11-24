using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Op>))]
public sealed record Op : OpenStringEnum<Op>
{
    private Op(string value) : base(value)
    {
    }

    public static readonly Op Eq = new("eq");

    public static readonly Op Answered = new("answered");

    public static readonly Op NotAnswered = new("not_answered");

    public TResult Match<TResult>(Func<TResult> onEq,
        Func<TResult> onAnswered,
        Func<TResult> onNotAnswered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eq => onEq(),
            _ when this == Answered => onAnswered(),
            _ when this == NotAnswered => onNotAnswered(),
            _ => otherwise(Value)
        };

    public void Match(Action onEq, Action onAnswered, Action onNotAnswered, Action<string> otherwise)
    {
        if (this == Eq) onEq();
        else if (this == Answered) onAnswered();
        else if (this == NotAnswered) onNotAnswered();
        else otherwise(Value);
    }
}
