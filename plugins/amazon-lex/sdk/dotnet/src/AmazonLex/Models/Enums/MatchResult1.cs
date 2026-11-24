using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The number of matching slots used in the slots listings for the slot resolution evaluation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchResult1>))]
public sealed record MatchResult1 : OpenStringEnum<MatchResult1>
{
    private MatchResult1(string value) : base(value)
    {
    }

    public static readonly MatchResult1 Matched = new("Matched");

    public static readonly MatchResult1 Mismatched = new("Mismatched");

    public static readonly MatchResult1 ExecutionError = new("ExecutionError");

    public TResult Match<TResult>(Func<TResult> onMatched,
        Func<TResult> onMismatched,
        Func<TResult> onExecutionError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Matched => onMatched(),
            _ when this == Mismatched => onMismatched(),
            _ when this == ExecutionError => onExecutionError(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatched, Action onMismatched, Action onExecutionError, Action<string> otherwise)
    {
        if (this == Matched) onMatched();
        else if (this == Mismatched) onMismatched();
        else if (this == ExecutionError) onExecutionError();
        else otherwise(Value);
    }
}
