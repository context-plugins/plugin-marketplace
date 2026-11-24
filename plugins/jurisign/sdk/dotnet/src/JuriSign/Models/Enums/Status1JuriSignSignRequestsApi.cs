using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1JuriSignSignRequestsApi>))]
public sealed record Status1JuriSignSignRequestsApi : OpenStringEnum<Status1JuriSignSignRequestsApi>
{
    private Status1JuriSignSignRequestsApi(string value) : base(value)
    {
    }

    public static readonly Status1JuriSignSignRequestsApi Pending = new("pending");

    public static readonly Status1JuriSignSignRequestsApi Processing = new("processing");

    public static readonly Status1JuriSignSignRequestsApi Paid = new("paid");

    public static readonly Status1JuriSignSignRequestsApi Failed = new("failed");

    public static readonly Status1JuriSignSignRequestsApi Canceled = new("canceled");

    public static readonly Status1JuriSignSignRequestsApi Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onPaid,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Paid => onPaid(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onPaid,
        Action onFailed,
        Action onCanceled,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Paid) onPaid();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
