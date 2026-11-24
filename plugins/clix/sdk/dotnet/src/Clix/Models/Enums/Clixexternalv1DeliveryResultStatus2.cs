using System;
using System.Text.Json.Serialization;
using Clix.Core.Enum;

namespace Clix.Models.Enums;

/// <summary>
/// Delivery status of the push notification.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Clixexternalv1DeliveryResultStatus2>))]
public sealed record Clixexternalv1DeliveryResultStatus2 : OpenStringEnum<Clixexternalv1DeliveryResultStatus2>
{
    private Clixexternalv1DeliveryResultStatus2(string value) : base(value)
    {
    }

    public static readonly Clixexternalv1DeliveryResultStatus2 DeliveryResultStatusSucceed = new(
        "DELIVERY_RESULT_STATUS_SUCCEED");

    public static readonly Clixexternalv1DeliveryResultStatus2 DeliveryResultStatusFailed = new(
        "DELIVERY_RESULT_STATUS_FAILED");

    public TResult Match<TResult>(Func<TResult> onDeliveryResultStatusSucceed,
        Func<TResult> onDeliveryResultStatusFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeliveryResultStatusSucceed => onDeliveryResultStatusSucceed(),
            _ when this == DeliveryResultStatusFailed => onDeliveryResultStatusFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeliveryResultStatusSucceed,
        Action onDeliveryResultStatusFailed,
        Action<string> otherwise)
    {
        if (this == DeliveryResultStatusSucceed) onDeliveryResultStatusSucceed();
        else if (this == DeliveryResultStatusFailed) onDeliveryResultStatusFailed();
        else otherwise(Value);
    }
}
