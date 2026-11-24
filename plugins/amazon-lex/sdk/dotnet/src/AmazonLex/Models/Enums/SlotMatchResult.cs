using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the expected and actual slots match or not.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotMatchResult>))]
public sealed record SlotMatchResult : OpenStringEnum<SlotMatchResult>
{
    private SlotMatchResult(string value) : base(value)
    {
    }

    public static readonly SlotMatchResult Matched = new("Matched");

    public static readonly SlotMatchResult Mismatched = new("Mismatched");

    public static readonly SlotMatchResult ExecutionError = new("ExecutionError");

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
