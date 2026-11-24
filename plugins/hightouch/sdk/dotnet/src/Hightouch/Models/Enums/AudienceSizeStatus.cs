using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AudienceSizeStatus>))]
public sealed record AudienceSizeStatus : OpenStringEnum<AudienceSizeStatus>
{
    private AudienceSizeStatus(string value) : base(value)
    {
    }

    public static readonly AudienceSizeStatus Pending = new("pending");

    public static readonly AudienceSizeStatus Success = new("success");

    public static readonly AudienceSizeStatus Failed = new("failed");

    public static readonly AudienceSizeStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onSuccess, Action onFailed, Action onCancelled, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
