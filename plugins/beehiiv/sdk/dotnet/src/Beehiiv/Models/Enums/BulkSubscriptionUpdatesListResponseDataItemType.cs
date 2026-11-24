using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of update (status or bulk)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BulkSubscriptionUpdatesListResponseDataItemType>))]
public sealed record BulkSubscriptionUpdatesListResponseDataItemType : OpenStringEnum<BulkSubscriptionUpdatesListResponseDataItemType>
{
    private BulkSubscriptionUpdatesListResponseDataItemType(string value) : base(value)
    {
    }

    public static readonly BulkSubscriptionUpdatesListResponseDataItemType Status = new("status");

    public static readonly BulkSubscriptionUpdatesListResponseDataItemType Bulk = new("bulk");

    public TResult Match<TResult>(Func<TResult> onStatus, Func<TResult> onBulk, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Status => onStatus(),
            _ when this == Bulk => onBulk(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatus, Action onBulk, Action<string> otherwise)
    {
        if (this == Status) onStatus();
        else if (this == Bulk) onBulk();
        else otherwise(Value);
    }
}
