using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Trigger type for each leg of the order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TriggerType>))]
public sealed record TriggerType : OpenStringEnum<TriggerType>
{
    private TriggerType(string value) : base(value)
    {
    }

    public static readonly TriggerType Above = new("ABOVE");

    public static readonly TriggerType Below = new("BELOW");

    public static readonly TriggerType Immediate = new("IMMEDIATE");

    public TResult Match<TResult>(Func<TResult> onAbove,
        Func<TResult> onBelow,
        Func<TResult> onImmediate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Above => onAbove(),
            _ when this == Below => onBelow(),
            _ when this == Immediate => onImmediate(),
            _ => otherwise(Value)
        };

    public void Match(Action onAbove, Action onBelow, Action onImmediate, Action<string> otherwise)
    {
        if (this == Above) onAbove();
        else if (this == Below) onBelow();
        else if (this == Immediate) onImmediate();
        else otherwise(Value);
    }
}
