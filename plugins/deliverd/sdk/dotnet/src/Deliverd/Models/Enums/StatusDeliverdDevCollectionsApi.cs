using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevCollectionsApi>))]
public sealed record StatusDeliverdDevCollectionsApi : OpenStringEnum<StatusDeliverdDevCollectionsApi>
{
    private StatusDeliverdDevCollectionsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevCollectionsApi Pending = new("pending");

    public static readonly StatusDeliverdDevCollectionsApi Complete = new("complete");

    public static readonly StatusDeliverdDevCollectionsApi Expired = new("expired");

    public static readonly StatusDeliverdDevCollectionsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onComplete,
        Func<TResult> onExpired,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Complete => onComplete(),
            _ when this == Expired => onExpired(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onComplete,
        Action onExpired,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Complete) onComplete();
        else if (this == Expired) onExpired();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
