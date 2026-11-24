using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Deprecated: Use type instead.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DiskType>))]
public sealed record DiskType : OpenStringEnum<DiskType>
{
    private DiskType(string value) : base(value)
    {
    }

    public static readonly DiskType DiskTypeUnspecified = new("DISK_TYPE_UNSPECIFIED");

    public static readonly DiskType HyperdiskBalanced = new("HYPERDISK_BALANCED");

    public static readonly DiskType HyperdiskExtreme = new("HYPERDISK_EXTREME");

    public static readonly DiskType HyperdiskMl = new("HYPERDISK_ML");

    public static readonly DiskType HyperdiskThroughput = new("HYPERDISK_THROUGHPUT");

    public TResult Match<TResult>(Func<TResult> onDiskTypeUnspecified,
        Func<TResult> onHyperdiskBalanced,
        Func<TResult> onHyperdiskExtreme,
        Func<TResult> onHyperdiskMl,
        Func<TResult> onHyperdiskThroughput,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DiskTypeUnspecified => onDiskTypeUnspecified(),
            _ when this == HyperdiskBalanced => onHyperdiskBalanced(),
            _ when this == HyperdiskExtreme => onHyperdiskExtreme(),
            _ when this == HyperdiskMl => onHyperdiskMl(),
            _ when this == HyperdiskThroughput => onHyperdiskThroughput(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiskTypeUnspecified,
        Action onHyperdiskBalanced,
        Action onHyperdiskExtreme,
        Action onHyperdiskMl,
        Action onHyperdiskThroughput,
        Action<string> otherwise)
    {
        if (this == DiskTypeUnspecified) onDiskTypeUnspecified();
        else if (this == HyperdiskBalanced) onHyperdiskBalanced();
        else if (this == HyperdiskExtreme) onHyperdiskExtreme();
        else if (this == HyperdiskMl) onHyperdiskMl();
        else if (this == HyperdiskThroughput) onHyperdiskThroughput();
        else otherwise(Value);
    }
}
