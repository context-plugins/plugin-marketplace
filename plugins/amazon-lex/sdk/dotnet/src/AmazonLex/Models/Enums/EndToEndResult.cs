using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The success or failure of the streaming of the conversation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EndToEndResult>))]
public sealed record EndToEndResult : OpenStringEnum<EndToEndResult>
{
    private EndToEndResult(string value) : base(value)
    {
    }

    public static readonly EndToEndResult Matched = new("Matched");

    public static readonly EndToEndResult Mismatched = new("Mismatched");

    public static readonly EndToEndResult ExecutionError = new("ExecutionError");

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
