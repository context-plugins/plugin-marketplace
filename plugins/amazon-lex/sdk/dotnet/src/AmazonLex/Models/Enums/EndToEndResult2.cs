using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The selection of matched or mismatched end-to-end status to filter test set results data at the conversation level.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EndToEndResult2>))]
public sealed record EndToEndResult2 : OpenStringEnum<EndToEndResult2>
{
    private EndToEndResult2(string value) : base(value)
    {
    }

    public static readonly EndToEndResult2 Matched = new("Matched");

    public static readonly EndToEndResult2 Mismatched = new("Mismatched");

    public static readonly EndToEndResult2 ExecutionError = new("ExecutionError");

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
