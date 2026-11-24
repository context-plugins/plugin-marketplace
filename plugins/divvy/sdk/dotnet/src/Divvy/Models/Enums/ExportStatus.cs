using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enumeration of entities that map from bipaas.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportStatus>))]
public sealed record ExportStatus : OpenStringEnum<ExportStatus>
{
    private ExportStatus(string value) : base(value)
    {
    }

    public static readonly ExportStatus Created = new("CREATED");

    public static readonly ExportStatus Queued = new("QUEUED");

    public static readonly ExportStatus InProgress = new("IN_PROGRESS");

    public static readonly ExportStatus DataRequested = new("DATA_REQUESTED");

    public static readonly ExportStatus DataGenerationInProgress = new("DATA_GENERATION_IN_PROGRESS");

    public static readonly ExportStatus FileReadyForTransfer = new("FILE_READY_FOR_TRANSFER");

    public static readonly ExportStatus FileTransferInProgress = new("FILE_TRANSFER_IN_PROGRESS");

    public static readonly ExportStatus FileTransferred = new("FILE_TRANSFERRED");

    public static readonly ExportStatus FileTransferFailed = new("FILE_TRANSFER_FAILED");

    public static readonly ExportStatus Success = new("SUCCESS");

    public static readonly ExportStatus PartialSuccess = new("PARTIAL_SUCCESS");

    public static readonly ExportStatus Failed = new("FAILED");

    public static readonly ExportStatus Cancelled = new("CANCELLED");

    public static readonly ExportStatus Expired = new("EXPIRED");

    public static readonly ExportStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onQueued,
        Func<TResult> onInProgress,
        Func<TResult> onDataRequested,
        Func<TResult> onDataGenerationInProgress,
        Func<TResult> onFileReadyForTransfer,
        Func<TResult> onFileTransferInProgress,
        Func<TResult> onFileTransferred,
        Func<TResult> onFileTransferFailed,
        Func<TResult> onSuccess,
        Func<TResult> onPartialSuccess,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<TResult> onExpired,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Queued => onQueued(),
            _ when this == InProgress => onInProgress(),
            _ when this == DataRequested => onDataRequested(),
            _ when this == DataGenerationInProgress => onDataGenerationInProgress(),
            _ when this == FileReadyForTransfer => onFileReadyForTransfer(),
            _ when this == FileTransferInProgress => onFileTransferInProgress(),
            _ when this == FileTransferred => onFileTransferred(),
            _ when this == FileTransferFailed => onFileTransferFailed(),
            _ when this == Success => onSuccess(),
            _ when this == PartialSuccess => onPartialSuccess(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Expired => onExpired(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onQueued,
        Action onInProgress,
        Action onDataRequested,
        Action onDataGenerationInProgress,
        Action onFileReadyForTransfer,
        Action onFileTransferInProgress,
        Action onFileTransferred,
        Action onFileTransferFailed,
        Action onSuccess,
        Action onPartialSuccess,
        Action onFailed,
        Action onCancelled,
        Action onExpired,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Queued) onQueued();
        else if (this == InProgress) onInProgress();
        else if (this == DataRequested) onDataRequested();
        else if (this == DataGenerationInProgress) onDataGenerationInProgress();
        else if (this == FileReadyForTransfer) onFileReadyForTransfer();
        else if (this == FileTransferInProgress) onFileTransferInProgress();
        else if (this == FileTransferred) onFileTransferred();
        else if (this == FileTransferFailed) onFileTransferFailed();
        else if (this == Success) onSuccess();
        else if (this == PartialSuccess) onPartialSuccess();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else if (this == Expired) onExpired();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
