using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The operation type for this filter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operation>))]
public sealed record Operation : OpenStringEnum<Operation>
{
    private Operation(string value) : base(value)
    {
    }

    public static readonly Operation OperationUnspecified = new("OPERATION_UNSPECIFIED");

    public static readonly Operation Equal = new("EQUAL");

    public static readonly Operation LessThan = new("LESS_THAN");

    public static readonly Operation LessThanOrEqual = new("LESS_THAN_OR_EQUAL");

    public static readonly Operation GreaterThan = new("GREATER_THAN");

    public static readonly Operation GreaterThanOrEqual = new("GREATER_THAN_OR_EQUAL");

    public TResult Match<TResult>(Func<TResult> onOperationUnspecified,
        Func<TResult> onEqual,
        Func<TResult> onLessThan,
        Func<TResult> onLessThanOrEqual,
        Func<TResult> onGreaterThan,
        Func<TResult> onGreaterThanOrEqual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OperationUnspecified => onOperationUnspecified(),
            _ when this == Equal => onEqual(),
            _ when this == LessThan => onLessThan(),
            _ when this == LessThanOrEqual => onLessThanOrEqual(),
            _ when this == GreaterThan => onGreaterThan(),
            _ when this == GreaterThanOrEqual => onGreaterThanOrEqual(),
            _ => otherwise(Value)
        };

    public void Match(Action onOperationUnspecified,
        Action onEqual,
        Action onLessThan,
        Action onLessThanOrEqual,
        Action onGreaterThan,
        Action onGreaterThanOrEqual,
        Action<string> otherwise)
    {
        if (this == OperationUnspecified) onOperationUnspecified();
        else if (this == Equal) onEqual();
        else if (this == LessThan) onLessThan();
        else if (this == LessThanOrEqual) onLessThanOrEqual();
        else if (this == GreaterThan) onGreaterThan();
        else if (this == GreaterThanOrEqual) onGreaterThanOrEqual();
        else otherwise(Value);
    }
}
