using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Symlink>))]
public sealed record Symlink : OpenStringEnum<Symlink>
{
    private Symlink(string value) : base(value)
    {
    }

    public static readonly Symlink SymlinkUnspecified = new("SYMLINK_UNSPECIFIED");

    public static readonly Symlink SymlinkSkip = new("SYMLINK_SKIP");

    public static readonly Symlink SymlinkPreserve = new("SYMLINK_PRESERVE");

    public TResult Match<TResult>(Func<TResult> onSymlinkUnspecified,
        Func<TResult> onSymlinkSkip,
        Func<TResult> onSymlinkPreserve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SymlinkUnspecified => onSymlinkUnspecified(),
            _ when this == SymlinkSkip => onSymlinkSkip(),
            _ when this == SymlinkPreserve => onSymlinkPreserve(),
            _ => otherwise(Value)
        };

    public void Match(Action onSymlinkUnspecified,
        Action onSymlinkSkip,
        Action onSymlinkPreserve,
        Action<string> otherwise)
    {
        if (this == SymlinkUnspecified) onSymlinkUnspecified();
        else if (this == SymlinkSkip) onSymlinkSkip();
        else if (this == SymlinkPreserve) onSymlinkPreserve();
        else otherwise(Value);
    }
}
