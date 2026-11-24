using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// The reason for the exception.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason2>))]
public sealed record Reason2 : OpenStringEnum<Reason2>
{
    private Reason2(string value) : base(value)
    {
    }

    public static readonly Reason2 SnapshotNotFound = new("SNAPSHOT_NOT_FOUND");

    public static readonly Reason2 GrantNotFound = new("GRANT_NOT_FOUND");

    public static readonly Reason2 DependencyResourceNotFound = new("DEPENDENCY_RESOURCE_NOT_FOUND");

    public static readonly Reason2 ImageNotFound = new("IMAGE_NOT_FOUND");

    public TResult Match<TResult>(Func<TResult> onSnapshotNotFound,
        Func<TResult> onGrantNotFound,
        Func<TResult> onDependencyResourceNotFound,
        Func<TResult> onImageNotFound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SnapshotNotFound => onSnapshotNotFound(),
            _ when this == GrantNotFound => onGrantNotFound(),
            _ when this == DependencyResourceNotFound => onDependencyResourceNotFound(),
            _ when this == ImageNotFound => onImageNotFound(),
            _ => otherwise(Value)
        };

    public void Match(Action onSnapshotNotFound,
        Action onGrantNotFound,
        Action onDependencyResourceNotFound,
        Action onImageNotFound,
        Action<string> otherwise)
    {
        if (this == SnapshotNotFound) onSnapshotNotFound();
        else if (this == GrantNotFound) onGrantNotFound();
        else if (this == DependencyResourceNotFound) onDependencyResourceNotFound();
        else if (this == ImageNotFound) onImageNotFound();
        else otherwise(Value);
    }
}
