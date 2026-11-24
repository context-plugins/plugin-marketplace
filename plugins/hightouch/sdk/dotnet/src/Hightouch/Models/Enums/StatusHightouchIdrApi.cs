using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHightouchIdrApi>))]
public sealed record StatusHightouchIdrApi : OpenStringEnum<StatusHightouchIdrApi>
{
    private StatusHightouchIdrApi(string value) : base(value)
    {
    }

    public static readonly StatusHightouchIdrApi Queued = new("QUEUED");

    public static readonly StatusHightouchIdrApi Processing = new("PROCESSING");

    public static readonly StatusHightouchIdrApi Success = new("SUCCESS");

    public static readonly StatusHightouchIdrApi Failure = new("FAILURE");

    public static readonly StatusHightouchIdrApi Cancelled = new("CANCELLED");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onProcessing,
        Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Processing => onProcessing(),
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onProcessing,
        Action onSuccess,
        Action onFailure,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Processing) onProcessing();
        else if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
