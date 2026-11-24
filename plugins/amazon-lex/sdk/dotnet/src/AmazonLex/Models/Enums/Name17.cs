using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The metric that you requested. Count – The number of sessions. Success – The number of sessions that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions that the user dropped. Duration – The duration of sessions. TurnPersession – The number of turns in the sessions. Concurrency – The number of sessions occurring in the same period of time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name17>))]
public sealed record Name17 : OpenStringEnum<Name17>
{
    private Name17(string value) : base(value)
    {
    }

    public static readonly Name17 Count = new("Count");

    public static readonly Name17 Success = new("Success");

    public static readonly Name17 Failure = new("Failure");

    public static readonly Name17 Dropped = new("Dropped");

    public static readonly Name17 Duration = new("Duration");

    public static readonly Name17 TurnsPerConversation = new("TurnsPerConversation");

    public static readonly Name17 Concurrency = new("Concurrency");

    public TResult Match<TResult>(Func<TResult> onCount,
        Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onDropped,
        Func<TResult> onDuration,
        Func<TResult> onTurnsPerConversation,
        Func<TResult> onConcurrency,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Dropped => onDropped(),
            _ when this == Duration => onDuration(),
            _ when this == TurnsPerConversation => onTurnsPerConversation(),
            _ when this == Concurrency => onConcurrency(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount,
        Action onSuccess,
        Action onFailure,
        Action onDropped,
        Action onDuration,
        Action onTurnsPerConversation,
        Action onConcurrency,
        Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Dropped) onDropped();
        else if (this == Duration) onDuration();
        else if (this == TurnsPerConversation) onTurnsPerConversation();
        else if (this == Concurrency) onConcurrency();
        else otherwise(Value);
    }
}
