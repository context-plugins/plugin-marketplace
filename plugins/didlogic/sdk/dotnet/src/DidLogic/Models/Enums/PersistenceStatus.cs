using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Identity persistence status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PersistenceStatus>))]
public sealed record PersistenceStatus : OpenStringEnum<PersistenceStatus>
{
    private PersistenceStatus(string value) : base(value)
    {
    }

    public static readonly PersistenceStatus Active = new("active");

    public static readonly PersistenceStatus Archived = new("archived");

    public static readonly PersistenceStatus ActiveImmortal = new("active-immortal");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<TResult> onActiveImmortal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ when this == ActiveImmortal => onActiveImmortal(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action onActiveImmortal, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else if (this == ActiveImmortal) onActiveImmortal();
        else otherwise(Value);
    }
}
