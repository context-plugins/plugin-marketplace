using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FillbotStatus>))]
public sealed record FillbotStatus : OpenStringEnum<FillbotStatus>
{
    private FillbotStatus(string value) : base(value)
    {
    }

    public static readonly FillbotStatus Pending = new("PENDING");

    public static readonly FillbotStatus InProgress = new("IN_PROGRESS");

    public static readonly FillbotStatus Complete = new("COMPLETE");

    public static readonly FillbotStatus Exhausted = new("EXHAUSTED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<TResult> onComplete,
        Func<TResult> onExhausted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ when this == Complete => onComplete(),
            _ when this == Exhausted => onExhausted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onInProgress,
        Action onComplete,
        Action onExhausted,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else if (this == Complete) onComplete();
        else if (this == Exhausted) onExhausted();
        else otherwise(Value);
    }
}
