using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValueSelectionStrategy3>))]
public sealed record ValueSelectionStrategy3 : OpenStringEnum<ValueSelectionStrategy3>
{
    private ValueSelectionStrategy3(string value) : base(value)
    {
    }

    public static readonly ValueSelectionStrategy3 OriginalValue = new("ORIGINAL_VALUE");

    public static readonly ValueSelectionStrategy3 TopResolution = new("TOP_RESOLUTION");

    public TResult Match<TResult>(Func<TResult> onOriginalValue,
        Func<TResult> onTopResolution,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OriginalValue => onOriginalValue(),
            _ when this == TopResolution => onTopResolution(),
            _ => otherwise(Value)
        };

    public void Match(Action onOriginalValue, Action onTopResolution, Action<string> otherwise)
    {
        if (this == OriginalValue) onOriginalValue();
        else if (this == TopResolution) onTopResolution();
        else otherwise(Value);
    }
}
