using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode ModeUnspecified = new("MODE_UNSPECIFIED");

    public static readonly Mode ModeSkip = new("MODE_SKIP");

    public static readonly Mode ModePreserve = new("MODE_PRESERVE");

    public TResult Match<TResult>(Func<TResult> onModeUnspecified,
        Func<TResult> onModeSkip,
        Func<TResult> onModePreserve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ModeUnspecified => onModeUnspecified(),
            _ when this == ModeSkip => onModeSkip(),
            _ when this == ModePreserve => onModePreserve(),
            _ => otherwise(Value)
        };

    public void Match(Action onModeUnspecified, Action onModeSkip, Action onModePreserve, Action<string> otherwise)
    {
        if (this == ModeUnspecified) onModeUnspecified();
        else if (this == ModeSkip) onModeSkip();
        else if (this == ModePreserve) onModePreserve();
        else otherwise(Value);
    }
}
