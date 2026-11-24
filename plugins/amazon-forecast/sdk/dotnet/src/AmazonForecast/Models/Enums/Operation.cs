using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The operation that is applied to the provided attribute. Operations include: ADD - adds Value to all rows of AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName. MULTIPLY - multiplies all rows of AttributeName by Value. DIVIDE - divides all rows of AttributeName by Value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operation>))]
public sealed record Operation : OpenStringEnum<Operation>
{
    private Operation(string value) : base(value)
    {
    }

    public static readonly Operation Add = new("ADD");

    public static readonly Operation Subtract = new("SUBTRACT");

    public static readonly Operation Multiply = new("MULTIPLY");

    public static readonly Operation Divide = new("DIVIDE");

    public TResult Match<TResult>(Func<TResult> onAdd,
        Func<TResult> onSubtract,
        Func<TResult> onMultiply,
        Func<TResult> onDivide,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == Subtract => onSubtract(),
            _ when this == Multiply => onMultiply(),
            _ when this == Divide => onDivide(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onSubtract, Action onMultiply, Action onDivide, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == Subtract) onSubtract();
        else if (this == Multiply) onMultiply();
        else if (this == Divide) onDivide();
        else otherwise(Value);
    }
}
