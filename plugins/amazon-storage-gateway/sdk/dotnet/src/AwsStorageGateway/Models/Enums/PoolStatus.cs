using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Status of the custom tape pool. Pool can be ACTIVE or DELETED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PoolStatus>))]
public sealed record PoolStatus : OpenStringEnum<PoolStatus>
{
    private PoolStatus(string value) : base(value)
    {
    }

    public static readonly PoolStatus Active = new("ACTIVE");

    public static readonly PoolStatus Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDeleted, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeleted, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
