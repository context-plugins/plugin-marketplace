using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The status of the generation request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GenerationStatus>))]
public sealed record GenerationStatus : OpenStringEnum<GenerationStatus>
{
    private GenerationStatus(string value) : base(value)
    {
    }

    public static readonly GenerationStatus Failed = new("Failed");

    public static readonly GenerationStatus Complete = new("Complete");

    public static readonly GenerationStatus InProgress = new("InProgress");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onComplete,
        Func<TResult> onInProgress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Complete => onComplete(),
            _ when this == InProgress => onInProgress(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed, Action onComplete, Action onInProgress, Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Complete) onComplete();
        else if (this == InProgress) onInProgress();
        else otherwise(Value);
    }
}
