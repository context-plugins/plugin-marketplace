using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Comparison operator.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator1>))]
public sealed record Operator1 : OpenStringEnum<Operator1>
{
    private Operator1(string value) : base(value)
    {
    }

    public static readonly Operator1 EqualsMember = new("EQUALS");

    public static readonly Operator1 NotEquals = new("NOT_EQUALS");

    public static readonly Operator1 Like = new("LIKE");

    public static readonly Operator1 StartsWith = new("STARTS_WITH");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onNotEquals,
        Func<TResult> onLike,
        Func<TResult> onStartsWith,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == NotEquals => onNotEquals(),
            _ when this == Like => onLike(),
            _ when this == StartsWith => onStartsWith(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember,
        Action onNotEquals,
        Action onLike,
        Action onStartsWith,
        Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == NotEquals) onNotEquals();
        else if (this == Like) onLike();
        else if (this == StartsWith) onStartsWith();
        else otherwise(Value);
    }
}
