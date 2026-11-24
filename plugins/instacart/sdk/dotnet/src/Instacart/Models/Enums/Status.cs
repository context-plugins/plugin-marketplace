using System;
using System.Text.Json.Serialization;
using Instacart.Core.Enum;

namespace Instacart.Models.Enums;

/// <summary>
/// The current status of the order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status BrandNew = new("brand_new");

    public static readonly Status Acknowledged = new("acknowledged");

    public static readonly Status Picking = new("picking");

    public static readonly Status Staging = new("staging");

    public static readonly Status Delivering = new("delivering");

    public static readonly Status Delivered = new("delivered");

    public static readonly Status Canceled = new("canceled");

    public static readonly Status Rescheduled = new("rescheduled");

    public TResult Match<TResult>(Func<TResult> onBrandNew,
        Func<TResult> onAcknowledged,
        Func<TResult> onPicking,
        Func<TResult> onStaging,
        Func<TResult> onDelivering,
        Func<TResult> onDelivered,
        Func<TResult> onCanceled,
        Func<TResult> onRescheduled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BrandNew => onBrandNew(),
            _ when this == Acknowledged => onAcknowledged(),
            _ when this == Picking => onPicking(),
            _ when this == Staging => onStaging(),
            _ when this == Delivering => onDelivering(),
            _ when this == Delivered => onDelivered(),
            _ when this == Canceled => onCanceled(),
            _ when this == Rescheduled => onRescheduled(),
            _ => otherwise(Value)
        };

    public void Match(Action onBrandNew,
        Action onAcknowledged,
        Action onPicking,
        Action onStaging,
        Action onDelivering,
        Action onDelivered,
        Action onCanceled,
        Action onRescheduled,
        Action<string> otherwise)
    {
        if (this == BrandNew) onBrandNew();
        else if (this == Acknowledged) onAcknowledged();
        else if (this == Picking) onPicking();
        else if (this == Staging) onStaging();
        else if (this == Delivering) onDelivering();
        else if (this == Delivered) onDelivered();
        else if (this == Canceled) onCanceled();
        else if (this == Rescheduled) onRescheduled();
        else otherwise(Value);
    }
}
