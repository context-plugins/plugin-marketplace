using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Status code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code Ok = new("OK");

    public static readonly Code Cancelled = new("CANCELLED");

    public static readonly Code Unknown = new("UNKNOWN");

    public static readonly Code InvalidArgument = new("INVALID_ARGUMENT");

    public static readonly Code DeadlineExceeded = new("DEADLINE_EXCEEDED");

    public static readonly Code NotFound = new("NOT_FOUND");

    public static readonly Code AlreadyExists = new("ALREADY_EXISTS");

    public static readonly Code PermissionDenied = new("PERMISSION_DENIED");

    public static readonly Code Unauthenticated = new("UNAUTHENTICATED");

    public static readonly Code ResourceExhausted = new("RESOURCE_EXHAUSTED");

    public static readonly Code FailedPrecondition = new("FAILED_PRECONDITION");

    public static readonly Code Aborted = new("ABORTED");

    public static readonly Code OutOfRange = new("OUT_OF_RANGE");

    public static readonly Code Unimplemented = new("UNIMPLEMENTED");

    public static readonly Code Internal = new("INTERNAL");

    public static readonly Code Unavailable = new("UNAVAILABLE");

    public static readonly Code DataLoss = new("DATA_LOSS");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onCancelled,
        Func<TResult> onUnknown,
        Func<TResult> onInvalidArgument,
        Func<TResult> onDeadlineExceeded,
        Func<TResult> onNotFound,
        Func<TResult> onAlreadyExists,
        Func<TResult> onPermissionDenied,
        Func<TResult> onUnauthenticated,
        Func<TResult> onResourceExhausted,
        Func<TResult> onFailedPrecondition,
        Func<TResult> onAborted,
        Func<TResult> onOutOfRange,
        Func<TResult> onUnimplemented,
        Func<TResult> onInternal,
        Func<TResult> onUnavailable,
        Func<TResult> onDataLoss,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Unknown => onUnknown(),
            _ when this == InvalidArgument => onInvalidArgument(),
            _ when this == DeadlineExceeded => onDeadlineExceeded(),
            _ when this == NotFound => onNotFound(),
            _ when this == AlreadyExists => onAlreadyExists(),
            _ when this == PermissionDenied => onPermissionDenied(),
            _ when this == Unauthenticated => onUnauthenticated(),
            _ when this == ResourceExhausted => onResourceExhausted(),
            _ when this == FailedPrecondition => onFailedPrecondition(),
            _ when this == Aborted => onAborted(),
            _ when this == OutOfRange => onOutOfRange(),
            _ when this == Unimplemented => onUnimplemented(),
            _ when this == Internal => onInternal(),
            _ when this == Unavailable => onUnavailable(),
            _ when this == DataLoss => onDataLoss(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk,
        Action onCancelled,
        Action onUnknown,
        Action onInvalidArgument,
        Action onDeadlineExceeded,
        Action onNotFound,
        Action onAlreadyExists,
        Action onPermissionDenied,
        Action onUnauthenticated,
        Action onResourceExhausted,
        Action onFailedPrecondition,
        Action onAborted,
        Action onOutOfRange,
        Action onUnimplemented,
        Action onInternal,
        Action onUnavailable,
        Action onDataLoss,
        Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Cancelled) onCancelled();
        else if (this == Unknown) onUnknown();
        else if (this == InvalidArgument) onInvalidArgument();
        else if (this == DeadlineExceeded) onDeadlineExceeded();
        else if (this == NotFound) onNotFound();
        else if (this == AlreadyExists) onAlreadyExists();
        else if (this == PermissionDenied) onPermissionDenied();
        else if (this == Unauthenticated) onUnauthenticated();
        else if (this == ResourceExhausted) onResourceExhausted();
        else if (this == FailedPrecondition) onFailedPrecondition();
        else if (this == Aborted) onAborted();
        else if (this == OutOfRange) onOutOfRange();
        else if (this == Unimplemented) onUnimplemented();
        else if (this == Internal) onInternal();
        else if (this == Unavailable) onUnavailable();
        else if (this == DataLoss) onDataLoss();
        else otherwise(Value);
    }
}
