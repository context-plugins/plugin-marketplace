using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Gid>))]
public sealed record Gid : OpenStringEnum<Gid>
{
    private Gid(string value) : base(value)
    {
    }

    public static readonly Gid GidUnspecified = new("GID_UNSPECIFIED");

    public static readonly Gid GidSkip = new("GID_SKIP");

    public static readonly Gid GidNumber = new("GID_NUMBER");

    public TResult Match<TResult>(Func<TResult> onGidUnspecified,
        Func<TResult> onGidSkip,
        Func<TResult> onGidNumber,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GidUnspecified => onGidUnspecified(),
            _ when this == GidSkip => onGidSkip(),
            _ when this == GidNumber => onGidNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onGidUnspecified, Action onGidSkip, Action onGidNumber, Action<string> otherwise)
    {
        if (this == GidUnspecified) onGidUnspecified();
        else if (this == GidSkip) onGidSkip();
        else if (this == GidNumber) onGidNumber();
        else otherwise(Value);
    }
}
