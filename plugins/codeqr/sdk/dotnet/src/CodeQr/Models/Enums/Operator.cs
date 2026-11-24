using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator EqualsMember = new("equals");

    public static readonly Operator NotEquals = new("not_equals");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onNotEquals,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == NotEquals => onNotEquals(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember, Action onNotEquals, Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == NotEquals) onNotEquals();
        else otherwise(Value);
    }
}
