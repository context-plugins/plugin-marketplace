using System;
using System.Text.Json.Serialization;
using Clix.Core.Enum;

namespace Clix.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Clixexternalv1DeliveryResultStatus>))]
public sealed record Clixexternalv1DeliveryResultStatus : OpenStringEnum<Clixexternalv1DeliveryResultStatus>
{
    private Clixexternalv1DeliveryResultStatus(string value) : base(value)
    {
    }

    public static readonly Clixexternalv1DeliveryResultStatus DeliveryResultStatusSucceed = new(
        "DELIVERY_RESULT_STATUS_SUCCEED");

    public static readonly Clixexternalv1DeliveryResultStatus DeliveryResultStatusFailed = new(
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
