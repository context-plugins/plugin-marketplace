using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IntentTopicsCondition>))]
public sealed record IntentTopicsCondition : OpenStringEnum<IntentTopicsCondition>
{
    private IntentTopicsCondition(string value) : base(value)
    {
    }

    public static readonly IntentTopicsCondition Or = new("or");

    public static readonly IntentTopicsCondition And = new("and");

    public TResult Match<TResult>(Func<TResult> onOr, Func<TResult> onAnd, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Or => onOr(),
            _ when this == And => onAnd(),
            _ => otherwise(Value)
        };

    public void Match(Action onOr, Action onAnd, Action<string> otherwise)
    {
        if (this == Or) onOr();
        else if (this == And) onAnd();
        else otherwise(Value);
    }
}
