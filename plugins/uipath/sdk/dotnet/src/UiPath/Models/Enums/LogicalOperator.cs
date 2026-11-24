using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Logical operator combining the conditions in this group
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogicalOperator>))]
public sealed record LogicalOperator : OpenStringEnum<LogicalOperator>
{
    private LogicalOperator(string value) : base(value)
    {
    }

    public static readonly LogicalOperator And = new("AND");

    public static readonly LogicalOperator Or = new("OR");

    public TResult Match<TResult>(Func<TResult> onAnd, Func<TResult> onOr, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == And => onAnd(),
            _ when this == Or => onOr(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnd, Action onOr, Action<string> otherwise)
    {
        if (this == And) onAnd();
        else if (this == Or) onOr();
        else otherwise(Value);
    }
}
