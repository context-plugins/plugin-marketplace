using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event JobSucceeded = new("job.succeeded");

    public static readonly Event JobFailed = new("job.failed");

    public static readonly Event JobTimedOut = new("job.timed_out");

    public static readonly Event JobAborted = new("job.aborted");

    public TResult Match<TResult>(Func<TResult> onJobSucceeded,
        Func<TResult> onJobFailed,
        Func<TResult> onJobTimedOut,
        Func<TResult> onJobAborted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobSucceeded => onJobSucceeded(),
            _ when this == JobFailed => onJobFailed(),
            _ when this == JobTimedOut => onJobTimedOut(),
            _ when this == JobAborted => onJobAborted(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobSucceeded,
        Action onJobFailed,
        Action onJobTimedOut,
        Action onJobAborted,
        Action<string> otherwise)
    {
        if (this == JobSucceeded) onJobSucceeded();
        else if (this == JobFailed) onJobFailed();
        else if (this == JobTimedOut) onJobTimedOut();
        else if (this == JobAborted) onJobAborted();
        else otherwise(Value);
    }
}
