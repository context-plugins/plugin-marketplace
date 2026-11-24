using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of event that has occurred
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType Revoked = new("revoked");

    public static readonly EventType Expired = new("expired");

    public static readonly EventType Updated = new("updated");

    public static readonly EventType Created = new("created");

    public static readonly EventType Archived = new("archived");

    public static readonly EventType Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onRevoked,
        Func<TResult> onExpired,
        Func<TResult> onUpdated,
        Func<TResult> onCreated,
        Func<TResult> onArchived,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Revoked => onRevoked(),
            _ when this == Expired => onExpired(),
            _ when this == Updated => onUpdated(),
            _ when this == Created => onCreated(),
            _ when this == Archived => onArchived(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onRevoked,
        Action onExpired,
        Action onUpdated,
        Action onCreated,
        Action onArchived,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Revoked) onRevoked();
        else if (this == Expired) onExpired();
        else if (this == Updated) onUpdated();
        else if (this == Created) onCreated();
        else if (this == Archived) onArchived();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
