using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The metric for which you want to get intent stage summary statistics. See Key definitions for more details about these metrics. Count – The number of times the intent stage occurred. Success – The number of times the intent stage succeeded. Failure – The number of times the intent stage failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of times the bot tried to elicit a response from the user at this stage.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name10>))]
public sealed record Name10 : OpenStringEnum<Name10>
{
    private Name10(string value) : base(value)
    {
    }

    public static readonly Name10 Count = new("Count");

    public static readonly Name10 Success = new("Success");

    public static readonly Name10 Failed = new("Failed");

    public static readonly Name10 Dropped = new("Dropped");

    public static readonly Name10 Retry = new("Retry");

    public TResult Match<TResult>(Func<TResult> onCount,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<TResult> onDropped,
        Func<TResult> onRetry,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ when this == Dropped => onDropped(),
            _ when this == Retry => onRetry(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount,
        Action onSuccess,
        Action onFailed,
        Action onDropped,
        Action onRetry,
        Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else if (this == Dropped) onDropped();
        else if (this == Retry) onRetry();
        else otherwise(Value);
    }
}
