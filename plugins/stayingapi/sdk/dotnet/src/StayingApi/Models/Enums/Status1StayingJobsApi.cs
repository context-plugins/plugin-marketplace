using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1StayingJobsApi>))]
public sealed record Status1StayingJobsApi : OpenStringEnum<Status1StayingJobsApi>
{
    private Status1StayingJobsApi(string value) : base(value)
    {
    }

    public static readonly Status1StayingJobsApi Pending = new("pending");

    public static readonly Status1StayingJobsApi Running = new("running");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onRunning, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Running => onRunning(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onRunning, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Running) onRunning();
        else otherwise(Value);
    }
}
