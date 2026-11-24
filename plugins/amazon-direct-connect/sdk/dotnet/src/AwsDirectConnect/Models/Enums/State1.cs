using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the resiliency group.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Pending = new("pending");

    public static readonly State1 Available = new("available");

    public static readonly State1 Deleting = new("deleting");

    public static readonly State1 Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onAvailable,
        Action onDeleting,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
