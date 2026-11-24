using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the update
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BulkSubscriptionUpdatesListResponseDataItemStatus>))]
public sealed record BulkSubscriptionUpdatesListResponseDataItemStatus : OpenStringEnum<BulkSubscriptionUpdatesListResponseDataItemStatus>
{
    private BulkSubscriptionUpdatesListResponseDataItemStatus(string value) : base(value)
    {
    }

    public static readonly BulkSubscriptionUpdatesListResponseDataItemStatus Pending = new("pending");

    public static readonly BulkSubscriptionUpdatesListResponseDataItemStatus Processing = new("processing");

    public static readonly BulkSubscriptionUpdatesListResponseDataItemStatus Complete = new("complete");

    public static readonly BulkSubscriptionUpdatesListResponseDataItemStatus Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessing,
        Func<TResult> onComplete,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processing => onProcessing(),
            _ when this == Complete => onComplete(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onProcessing,
        Action onComplete,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processing) onProcessing();
        else if (this == Complete) onComplete();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
