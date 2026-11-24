using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The metric for which you want to get intent summary statistics. Count – The number of times the intent was invoked. Success – The number of times the intent succeeded. Failure – The number of times the intent failed. Switched – The number of times there was a switch to a different intent. Dropped – The number of times the user dropped the intent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name5>))]
public sealed record Name5 : OpenStringEnum<Name5>
{
    private Name5(string value) : base(value)
    {
    }

    public static readonly Name5 Count = new("Count");

    public static readonly Name5 Success = new("Success");

    public static readonly Name5 Failure = new("Failure");

    public static readonly Name5 Switched = new("Switched");

    public static readonly Name5 Dropped = new("Dropped");

    public TResult Match<TResult>(Func<TResult> onCount,
        Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onSwitched,
        Func<TResult> onDropped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Switched => onSwitched(),
            _ when this == Dropped => onDropped(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount,
        Action onSuccess,
        Action onFailure,
        Action onSwitched,
        Action onDropped,
        Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Switched) onSwitched();
        else if (this == Dropped) onDropped();
        else otherwise(Value);
    }
}
