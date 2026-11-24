using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Comparison operator for the filter condition
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator EqualsMember = new("equals");

    public static readonly Operator NotEquals = new("notEquals");

    public static readonly Operator LessThan = new("lessThan");

    public static readonly Operator LessThanOrEquals = new("lessThanOrEquals");

    public static readonly Operator GreaterThan = new("greaterThan");

    public static readonly Operator GreaterThanOrEquals = new("greaterThanOrEquals");

    public static readonly Operator Contains = new("contains");

    public static readonly Operator StartsWith = new("startsWith");

    public static readonly Operator EndsWith = new("endsWith");

    public static readonly Operator IsNull = new("isNull");

    public static readonly Operator IsNotNull = new("isNotNull");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onNotEquals,
        Func<TResult> onLessThan,
        Func<TResult> onLessThanOrEquals,
        Func<TResult> onGreaterThan,
        Func<TResult> onGreaterThanOrEquals,
        Func<TResult> onContains,
        Func<TResult> onStartsWith,
        Func<TResult> onEndsWith,
        Func<TResult> onIsNull,
        Func<TResult> onIsNotNull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == NotEquals => onNotEquals(),
            _ when this == LessThan => onLessThan(),
            _ when this == LessThanOrEquals => onLessThanOrEquals(),
            _ when this == GreaterThan => onGreaterThan(),
            _ when this == GreaterThanOrEquals => onGreaterThanOrEquals(),
            _ when this == Contains => onContains(),
            _ when this == StartsWith => onStartsWith(),
            _ when this == EndsWith => onEndsWith(),
            _ when this == IsNull => onIsNull(),
            _ when this == IsNotNull => onIsNotNull(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember,
        Action onNotEquals,
        Action onLessThan,
        Action onLessThanOrEquals,
        Action onGreaterThan,
        Action onGreaterThanOrEquals,
        Action onContains,
        Action onStartsWith,
        Action onEndsWith,
        Action onIsNull,
        Action onIsNotNull,
        Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == NotEquals) onNotEquals();
        else if (this == LessThan) onLessThan();
        else if (this == LessThanOrEquals) onLessThanOrEquals();
        else if (this == GreaterThan) onGreaterThan();
        else if (this == GreaterThanOrEquals) onGreaterThanOrEquals();
        else if (this == Contains) onContains();
        else if (this == StartsWith) onStartsWith();
        else if (this == EndsWith) onEndsWith();
        else if (this == IsNull) onIsNull();
        else if (this == IsNotNull) onIsNotNull();
        else otherwise(Value);
    }
}
