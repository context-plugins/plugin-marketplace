using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CallStatus>))]
public sealed record CallStatus : OpenStringEnum<CallStatus>
{
    private CallStatus(string value) : base(value)
    {
    }

    public static readonly CallStatus Originating = new("originating");

    public static readonly CallStatus Ringing = new("ringing");

    public static readonly CallStatus Answered = new("answered");

    public static readonly CallStatus Completed = new("completed");

    public static readonly CallStatus Failed = new("failed");

    public static readonly CallStatus Canceled = new("canceled");

    public TResult Match<TResult>(Func<TResult> onOriginating,
        Func<TResult> onRinging,
        Func<TResult> onAnswered,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Originating => onOriginating(),
            _ when this == Ringing => onRinging(),
            _ when this == Answered => onAnswered(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onOriginating,
        Action onRinging,
        Action onAnswered,
        Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Originating) onOriginating();
        else if (this == Ringing) onRinging();
        else if (this == Answered) onAnswered();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
