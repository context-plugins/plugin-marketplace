using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Document upload status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UploadStatus>))]
public sealed record UploadStatus : OpenStringEnum<UploadStatus>
{
    private UploadStatus(string value) : base(value)
    {
    }

    public static readonly UploadStatus Uploaded = new("UPLOADED");

    public static readonly UploadStatus InProgress = new("IN_PROGRESS");

    public static readonly UploadStatus IvaProcessing = new("IVA_PROCESSING");

    public static readonly UploadStatus Autosaved = new("AUTOSAVED");

    public static readonly UploadStatus Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onUploaded,
        Func<TResult> onInProgress,
        Func<TResult> onIvaProcessing,
        Func<TResult> onAutosaved,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Uploaded => onUploaded(),
            _ when this == InProgress => onInProgress(),
            _ when this == IvaProcessing => onIvaProcessing(),
            _ when this == Autosaved => onAutosaved(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onUploaded,
        Action onInProgress,
        Action onIvaProcessing,
        Action onAutosaved,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Uploaded) onUploaded();
        else if (this == InProgress) onInProgress();
        else if (this == IvaProcessing) onIvaProcessing();
        else if (this == Autosaved) onAutosaved();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
