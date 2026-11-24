using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDoiTBillingTransferApi>))]
public sealed record StatusDoiTBillingTransferApi : OpenStringEnum<StatusDoiTBillingTransferApi>
{
    private StatusDoiTBillingTransferApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTBillingTransferApi HandshakePending = new("handshake_pending");

    public static readonly StatusDoiTBillingTransferApi CurExportWaiting = new("cur_export_waiting");

    public static readonly StatusDoiTBillingTransferApi Active = new("active");

    public static readonly StatusDoiTBillingTransferApi Declined = new("declined");

    public static readonly StatusDoiTBillingTransferApi Canceled = new("canceled");

    public static readonly StatusDoiTBillingTransferApi Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onHandshakePending,
        Func<TResult> onCurExportWaiting,
        Func<TResult> onActive,
        Func<TResult> onDeclined,
        Func<TResult> onCanceled,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HandshakePending => onHandshakePending(),
            _ when this == CurExportWaiting => onCurExportWaiting(),
            _ when this == Active => onActive(),
            _ when this == Declined => onDeclined(),
            _ when this == Canceled => onCanceled(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onHandshakePending,
        Action onCurExportWaiting,
        Action onActive,
        Action onDeclined,
        Action onCanceled,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == HandshakePending) onHandshakePending();
        else if (this == CurExportWaiting) onCurExportWaiting();
        else if (this == Active) onActive();
        else if (this == Declined) onDeclined();
        else if (this == Canceled) onCanceled();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
