using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation should return only utterances that equal the specified value. Specify CO when the ListAggregatedUtterances operation should return utterances that contain the specified value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator Co = new("CO");

    public static readonly Operator Eq = new("EQ");

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
