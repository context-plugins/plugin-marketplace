using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for fulfillment type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FulfillmentTypeConnectEventsSubscriptionsApi>))]
public sealed record FulfillmentTypeConnectEventsSubscriptionsApi : OpenStringEnum<FulfillmentTypeConnectEventsSubscriptionsApi>
{
    private FulfillmentTypeConnectEventsSubscriptionsApi(string value) : base(value)
    {
    }

    public static readonly FulfillmentTypeConnectEventsSubscriptionsApi Payroll = new("PAYROLL");

    public static readonly FulfillmentTypeConnectEventsSubscriptionsApi Ach = new("ACH");

    public static readonly FulfillmentTypeConnectEventsSubscriptionsApi Unspecified = new("UNSPECIFIED");

    public TResult Match<TResult>(Func<TResult> onPayroll,
        Func<TResult> onAch,
        Func<TResult> onUnspecified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payroll => onPayroll(),
            _ when this == Ach => onAch(),
            _ when this == Unspecified => onUnspecified(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayroll, Action onAch, Action onUnspecified, Action<string> otherwise)
    {
        if (this == Payroll) onPayroll();
        else if (this == Ach) onAch();
        else if (this == Unspecified) onUnspecified();
        else otherwise(Value);
    }
}
