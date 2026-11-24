using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRazorpayPaymentDowntimesApi>))]
public sealed record StatusRazorpayPaymentDowntimesApi : OpenStringEnum<StatusRazorpayPaymentDowntimesApi>
{
    private StatusRazorpayPaymentDowntimesApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayPaymentDowntimesApi Scheduled = new("scheduled");

    public static readonly StatusRazorpayPaymentDowntimesApi Started = new("started");

    public static readonly StatusRazorpayPaymentDowntimesApi Resolved = new("resolved");

    public static readonly StatusRazorpayPaymentDowntimesApi Updated = new("updated");

    public TResult Match<TResult>(Func<TResult> onScheduled,
        Func<TResult> onStarted,
        Func<TResult> onResolved,
        Func<TResult> onUpdated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scheduled => onScheduled(),
            _ when this == Started => onStarted(),
            _ when this == Resolved => onResolved(),
            _ when this == Updated => onUpdated(),
            _ => otherwise(Value)
        };

    public void Match(Action onScheduled,
        Action onStarted,
        Action onResolved,
        Action onUpdated,
        Action<string> otherwise)
    {
        if (this == Scheduled) onScheduled();
        else if (this == Started) onStarted();
        else if (this == Resolved) onResolved();
        else if (this == Updated) onUpdated();
        else otherwise(Value);
    }
}
