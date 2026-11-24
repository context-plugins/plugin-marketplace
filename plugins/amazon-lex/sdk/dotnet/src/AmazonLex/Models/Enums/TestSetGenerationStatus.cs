using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status for the test set generation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestSetGenerationStatus>))]
public sealed record TestSetGenerationStatus : OpenStringEnum<TestSetGenerationStatus>
{
    private TestSetGenerationStatus(string value) : base(value)
    {
    }

    public static readonly TestSetGenerationStatus Generating = new("Generating");

    public static readonly TestSetGenerationStatus Ready = new("Ready");

    public static readonly TestSetGenerationStatus Failed = new("Failed");

    public static readonly TestSetGenerationStatus Pending = new("Pending");

    public TResult Match<TResult>(Func<TResult> onGenerating,
        Func<TResult> onReady,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Generating => onGenerating(),
            _ when this == Ready => onReady(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onGenerating, Action onReady, Action onFailed, Action onPending, Action<string> otherwise)
    {
        if (this == Generating) onGenerating();
        else if (this == Ready) onReady();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
