using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// pending: being processed. processed: credited to customer. failed: refund failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayRefundsApi>))]
public sealed record StatusRazorpayRefundsApi : OpenStringEnum<StatusRazorpayRefundsApi>
{
    private StatusRazorpayRefundsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayRefundsApi Pending = new("pending");

    public static readonly StatusRazorpayRefundsApi Processed = new("processed");

    public static readonly StatusRazorpayRefundsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onProcessed,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Processed => onProcessed(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onProcessed, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Processed) onProcessed();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
