using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRazorpayXPayoutLinksApi>))]
public sealed record StatusRazorpayXPayoutLinksApi : OpenStringEnum<StatusRazorpayXPayoutLinksApi>
{
    private StatusRazorpayXPayoutLinksApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayXPayoutLinksApi Pending = new("pending");

    public static readonly StatusRazorpayXPayoutLinksApi Issued = new("issued");

    public static readonly StatusRazorpayXPayoutLinksApi Processing = new("processing");

    public static readonly StatusRazorpayXPayoutLinksApi Processed = new("processed");

    public static readonly StatusRazorpayXPayoutLinksApi Cancelled = new("cancelled");

    public static readonly StatusRazorpayXPayoutLinksApi Rejected = new("rejected");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onIssued,
        Func<TResult> onProcessing,
        Func<TResult> onProcessed,
        Func<TResult> onCancelled,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Issued => onIssued(),
            _ when this == Processing => onProcessing(),
            _ when this == Processed => onProcessed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onIssued,
        Action onProcessing,
        Action onProcessed,
        Action onCancelled,
        Action onRejected,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Issued) onIssued();
        else if (this == Processing) onProcessing();
        else if (this == Processed) onProcessed();
        else if (this == Cancelled) onCancelled();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
