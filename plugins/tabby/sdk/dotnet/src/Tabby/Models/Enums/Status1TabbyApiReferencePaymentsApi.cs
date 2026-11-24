using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1TabbyApiReferencePaymentsApi>))]
public sealed record Status1TabbyApiReferencePaymentsApi : OpenStringEnum<Status1TabbyApiReferencePaymentsApi>
{
    private Status1TabbyApiReferencePaymentsApi(string value) : base(value)
    {
    }

    public static readonly Status1TabbyApiReferencePaymentsApi Authorized = new("authorized");

    public static readonly Status1TabbyApiReferencePaymentsApi Closed = new("closed");

    public static readonly Status1TabbyApiReferencePaymentsApi Rejected = new("rejected");

    public static readonly Status1TabbyApiReferencePaymentsApi New = new("new");

    public static readonly Status1TabbyApiReferencePaymentsApi Captured = new("captured");

    public static readonly Status1TabbyApiReferencePaymentsApi Refunded = new("refunded");

    public static readonly Status1TabbyApiReferencePaymentsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onAuthorized,
        Func<TResult> onClosed,
        Func<TResult> onRejected,
        Func<TResult> onNew,
        Func<TResult> onCaptured,
        Func<TResult> onRefunded,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Authorized => onAuthorized(),
            _ when this == Closed => onClosed(),
            _ when this == Rejected => onRejected(),
            _ when this == New => onNew(),
            _ when this == Captured => onCaptured(),
            _ when this == Refunded => onRefunded(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthorized,
        Action onClosed,
        Action onRejected,
        Action onNew,
        Action onCaptured,
        Action onRefunded,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Authorized) onAuthorized();
        else if (this == Closed) onClosed();
        else if (this == Rejected) onRejected();
        else if (this == New) onNew();
        else if (this == Captured) onCaptured();
        else if (this == Refunded) onRefunded();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
