using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("pending");

    public static readonly Status1 CurExportWaiting = new("cur_export_waiting");

    public static readonly Status1 Active = new("active");

    public static readonly Status1 Canceled = new("canceled");

    public static readonly Status1 Declined = new("declined");

    public static readonly Status1 Expired = new("expired");

    public static readonly Status1 Revoked = new("revoked");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onCurExportWaiting,
        Func<TResult> onActive,
        Func<TResult> onCanceled,
        Func<TResult> onDeclined,
        Func<TResult> onExpired,
        Func<TResult> onRevoked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == CurExportWaiting => onCurExportWaiting(),
            _ when this == Active => onActive(),
            _ when this == Canceled => onCanceled(),
            _ when this == Declined => onDeclined(),
            _ when this == Expired => onExpired(),
            _ when this == Revoked => onRevoked(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onCurExportWaiting,
        Action onActive,
        Action onCanceled,
        Action onDeclined,
        Action onExpired,
        Action onRevoked,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == CurExportWaiting) onCurExportWaiting();
        else if (this == Active) onActive();
        else if (this == Canceled) onCanceled();
        else if (this == Declined) onDeclined();
        else if (this == Expired) onExpired();
        else if (this == Revoked) onRevoked();
        else otherwise(Value);
    }
}
