using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType EventTypeUnspecified = new("EVENT_TYPE_UNSPECIFIED");

    public static readonly EventType TransferOperationSuccess = new("TRANSFER_OPERATION_SUCCESS");

    public static readonly EventType TransferOperationFailed = new("TRANSFER_OPERATION_FAILED");

    public static readonly EventType TransferOperationAborted = new("TRANSFER_OPERATION_ABORTED");

    public TResult Match<TResult>(Func<TResult> onEventTypeUnspecified,
        Func<TResult> onTransferOperationSuccess,
        Func<TResult> onTransferOperationFailed,
        Func<TResult> onTransferOperationAborted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EventTypeUnspecified => onEventTypeUnspecified(),
            _ when this == TransferOperationSuccess => onTransferOperationSuccess(),
            _ when this == TransferOperationFailed => onTransferOperationFailed(),
            _ when this == TransferOperationAborted => onTransferOperationAborted(),
            _ => otherwise(Value)
        };

    public void Match(Action onEventTypeUnspecified,
        Action onTransferOperationSuccess,
        Action onTransferOperationFailed,
        Action onTransferOperationAborted,
        Action<string> otherwise)
    {
        if (this == EventTypeUnspecified) onEventTypeUnspecified();
        else if (this == TransferOperationSuccess) onTransferOperationSuccess();
        else if (this == TransferOperationFailed) onTransferOperationFailed();
        else if (this == TransferOperationAborted) onTransferOperationAborted();
        else otherwise(Value);
    }
}
