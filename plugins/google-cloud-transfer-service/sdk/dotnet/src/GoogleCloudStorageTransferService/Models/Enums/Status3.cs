using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Status of the job. This value MUST be specified for <c>CreateTransferJobRequests</c>. <b>Note:</b> The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 StatusUnspecified = new("STATUS_UNSPECIFIED");

    public static readonly Status3 Enabled = new("ENABLED");

    public static readonly Status3 Disabled = new("DISABLED");

    public static readonly Status3 Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onStatusUnspecified,
        Func<TResult> onEnabled,
        Func<TResult> onDisabled,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StatusUnspecified => onStatusUnspecified(),
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatusUnspecified,
        Action onEnabled,
        Action onDisabled,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == StatusUnspecified) onStatusUnspecified();
        else if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
