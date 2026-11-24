using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy, the default is ORIGINAL_VALUE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValueSelectionStrategy2>))]
public sealed record ValueSelectionStrategy2 : OpenStringEnum<ValueSelectionStrategy2>
{
    private ValueSelectionStrategy2(string value) : base(value)
    {
    }

    public static readonly ValueSelectionStrategy2 OriginalValue = new("ORIGINAL_VALUE");

    public static readonly ValueSelectionStrategy2 TopResolution = new("TOP_RESOLUTION");

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
