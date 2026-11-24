using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy, the default is ORIGINAL_VALUE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResolutionStrategy>))]
public sealed record ResolutionStrategy : OpenStringEnum<ResolutionStrategy>
{
    private ResolutionStrategy(string value) : base(value)
    {
    }

    public static readonly ResolutionStrategy OriginalValue = new("OriginalValue");

    public static readonly ResolutionStrategy TopResolution = new("TopResolution");

    public static readonly ResolutionStrategy Concatenation = new("Concatenation");

    public TResult Match<TResult>(Func<TResult> onOriginalValue,
        Func<TResult> onTopResolution,
        Func<TResult> onConcatenation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OriginalValue => onOriginalValue(),
            _ when this == TopResolution => onTopResolution(),
            _ when this == Concatenation => onConcatenation(),
            _ => otherwise(Value)
        };

    public void Match(Action onOriginalValue, Action onTopResolution, Action onConcatenation, Action<string> otherwise)
    {
        if (this == OriginalValue) onOriginalValue();
        else if (this == TopResolution) onTopResolution();
        else if (this == Concatenation) onConcatenation();
        else otherwise(Value);
    }
}
