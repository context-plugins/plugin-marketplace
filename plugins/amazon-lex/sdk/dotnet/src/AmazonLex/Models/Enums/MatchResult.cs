using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The number of times the specific intent is used in the evaluation of intent level success or failure.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchResult>))]
public sealed record MatchResult : OpenStringEnum<MatchResult>
{
    private MatchResult(string value) : base(value)
    {
    }

    public static readonly MatchResult Matched = new("Matched");

    public static readonly MatchResult Mismatched = new("Mismatched");

    public static readonly MatchResult ExecutionError = new("ExecutionError");

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
