using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Delivery status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDidlogicComSmsApi>))]
public sealed record StatusDidlogicComSmsApi : OpenStringEnum<StatusDidlogicComSmsApi>
{
    private StatusDidlogicComSmsApi(string value) : base(value)
    {
    }

    public static readonly StatusDidlogicComSmsApi Created = new("created");

    public static readonly StatusDidlogicComSmsApi Failed = new("failed");

    public static readonly StatusDidlogicComSmsApi Sent = new("sent");

    public static readonly StatusDidlogicComSmsApi DlrError = new("dlr_error");

    public static readonly StatusDidlogicComSmsApi Delivered = new("delivered");

    public static readonly StatusDidlogicComSmsApi NotDelivered = new("not_delivered");

    public static readonly StatusDidlogicComSmsApi Interrupted = new("interrupted");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onFailed,
        Func<TResult> onSent,
        Func<TResult> onDlrError,
        Func<TResult> onDelivered,
        Func<TResult> onNotDelivered,
        Func<TResult> onInterrupted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Failed => onFailed(),
            _ when this == Sent => onSent(),
            _ when this == DlrError => onDlrError(),
            _ when this == Delivered => onDelivered(),
            _ when this == NotDelivered => onNotDelivered(),
            _ when this == Interrupted => onInterrupted(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onFailed,
        Action onSent,
        Action onDlrError,
        Action onDelivered,
        Action onNotDelivered,
        Action onInterrupted,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Failed) onFailed();
        else if (this == Sent) onSent();
        else if (this == DlrError) onDlrError();
        else if (this == Delivered) onDelivered();
        else if (this == NotDelivered) onNotDelivered();
        else if (this == Interrupted) onInterrupted();
        else otherwise(Value);
    }
}
