using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The status of the high availability monitoring test. If a test hasn't been performed, the value of this field is null.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Complete = new("COMPLETE");

    public static readonly Status Failed = new("FAILED");

    public static readonly Status Pending = new("PENDING");

    public TResult Match<TResult>(Func<TResult> onComplete,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Complete => onComplete(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onComplete, Action onFailed, Action onPending, Action<string> otherwise)
    {
        if (this == Complete) onComplete();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
