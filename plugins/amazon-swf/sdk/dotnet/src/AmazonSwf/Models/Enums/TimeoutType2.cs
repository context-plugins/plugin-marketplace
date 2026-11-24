using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The type of the timeout that caused this event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeoutType2>))]
public sealed record TimeoutType2 : OpenStringEnum<TimeoutType2>
{
    private TimeoutType2(string value) : base(value)
    {
    }

    public static readonly TimeoutType2 StartToClose = new("START_TO_CLOSE");

    public TResult Match<TResult>(Func<TResult> onStartToClose, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StartToClose => onStartToClose(),
            _ => otherwise(Value)
        };

    public void Match(Action onStartToClose, Action<string> otherwise)
    {
        if (this == StartToClose) onStartToClose();
        else otherwise(Value);
    }
}
