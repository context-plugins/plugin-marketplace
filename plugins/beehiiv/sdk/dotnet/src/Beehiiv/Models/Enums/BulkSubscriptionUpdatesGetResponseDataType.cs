using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of update (status or bulk)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BulkSubscriptionUpdatesGetResponseDataType>))]
public sealed record BulkSubscriptionUpdatesGetResponseDataType : OpenStringEnum<BulkSubscriptionUpdatesGetResponseDataType>
{
    private BulkSubscriptionUpdatesGetResponseDataType(string value) : base(value)
    {
    }

    public static readonly BulkSubscriptionUpdatesGetResponseDataType Bulk = new("bulk");

    public static readonly BulkSubscriptionUpdatesGetResponseDataType Status = new("status");

    public TResult Match<TResult>(Func<TResult> onBulk, Func<TResult> onStatus, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bulk => onBulk(),
            _ when this == Status => onStatus(),
            _ => otherwise(Value)
        };

    public void Match(Action onBulk, Action onStatus, Action<string> otherwise)
    {
        if (this == Bulk) onBulk();
        else if (this == Status) onStatus();
        else otherwise(Value);
    }
}
