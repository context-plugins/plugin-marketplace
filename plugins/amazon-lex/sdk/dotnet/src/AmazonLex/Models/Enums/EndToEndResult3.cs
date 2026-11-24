using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the expected and actual outputs match or not, or if there is an error in execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EndToEndResult3>))]
public sealed record EndToEndResult3 : OpenStringEnum<EndToEndResult3>
{
    private EndToEndResult3(string value) : base(value)
    {
    }

    public static readonly EndToEndResult3 Matched = new("Matched");

    public static readonly EndToEndResult3 Mismatched = new("Mismatched");

    public static readonly EndToEndResult3 ExecutionError = new("ExecutionError");

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
