using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The operator to use for the filter. Specify EQ when the ListBots operation should return only aliases that equal the specified value. Specify CO when the ListBots operation should return aliases that contain the specified value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operator6>))]
public sealed record Operator6 : OpenStringEnum<Operator6>
{
    private Operator6(string value) : base(value)
    {
    }

    public static readonly Operator6 Co = new("CO");

    public static readonly Operator6 Eq = new("EQ");

    public static readonly Operator6 Ne = new("NE");

    public TResult Match<TResult>(Func<TResult> onCo,
        Func<TResult> onEq,
        Func<TResult> onNe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Co => onCo(),
            _ when this == Eq => onEq(),
            _ when this == Ne => onNe(),
            _ => otherwise(Value)
        };

    public void Match(Action onCo, Action onEq, Action onNe, Action<string> otherwise)
    {
        if (this == Co) onCo();
        else if (this == Eq) onEq();
        else if (this == Ne) onNe();
        else otherwise(Value);
    }
}
