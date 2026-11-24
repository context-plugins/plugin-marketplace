using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Uid>))]
public sealed record Uid : OpenStringEnum<Uid>
{
    private Uid(string value) : base(value)
    {
    }

    public static readonly Uid UidUnspecified = new("UID_UNSPECIFIED");

    public static readonly Uid UidSkip = new("UID_SKIP");

    public static readonly Uid UidNumber = new("UID_NUMBER");

    public TResult Match<TResult>(Func<TResult> onUidUnspecified,
        Func<TResult> onUidSkip,
        Func<TResult> onUidNumber,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UidUnspecified => onUidUnspecified(),
            _ when this == UidSkip => onUidSkip(),
            _ when this == UidNumber => onUidNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onUidUnspecified, Action onUidSkip, Action onUidNumber, Action<string> otherwise)
    {
        if (this == UidUnspecified) onUidUnspecified();
        else if (this == UidSkip) onUidSkip();
        else if (this == UidNumber) onUidNumber();
        else otherwise(Value);
    }
}
