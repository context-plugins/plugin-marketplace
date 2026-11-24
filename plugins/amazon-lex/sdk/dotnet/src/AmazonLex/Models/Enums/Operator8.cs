using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operator to use for the filter. Specify EQ when the ListIntents operation should return only aliases that equal the specified value. Specify CO when the ListIntents operation should return aliases that contain the specified value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator8>))]
public sealed record Operator8 : OpenStringEnum<Operator8>
{
    private Operator8(string value) : base(value)
    {
    }

    public static readonly Operator8 Co = new("CO");

    public static readonly Operator8 Eq = new("EQ");

    public TResult Match<TResult>(Func<TResult> onCo, Func<TResult> onEq, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Co => onCo(),
            _ when this == Eq => onEq(),
            _ => otherwise(Value)
        };

    public void Match(Action onCo, Action onEq, Action<string> otherwise)
    {
        if (this == Co) onCo();
        else if (this == Eq) onEq();
        else otherwise(Value);
    }
}
