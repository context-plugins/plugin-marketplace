using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The file's upload status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 RequiresUpload = new("REQUIRES_UPLOAD");

    public static readonly Status1 Pending = new("PENDING");

    public static readonly Status1 Uploaded = new("UPLOADED");

    public static readonly Status1 Invalid = new("INVALID");

    public TResult Match<TResult>(Func<TResult> onRequiresUpload,
        Func<TResult> onPending,
        Func<TResult> onUploaded,
        Func<TResult> onInvalid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RequiresUpload => onRequiresUpload(),
            _ when this == Pending => onPending(),
            _ when this == Uploaded => onUploaded(),
            _ when this == Invalid => onInvalid(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequiresUpload,
        Action onPending,
        Action onUploaded,
        Action onInvalid,
        Action<string> otherwise)
    {
        if (this == RequiresUpload) onRequiresUpload();
        else if (this == Pending) onPending();
        else if (this == Uploaded) onUploaded();
        else if (this == Invalid) onInvalid();
        else otherwise(Value);
    }
}
