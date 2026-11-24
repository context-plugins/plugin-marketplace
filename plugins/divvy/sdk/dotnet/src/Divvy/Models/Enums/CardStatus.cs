using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// CardStatus.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardStatus>))]
public sealed record CardStatus : OpenStringEnum<CardStatus>
{
    private CardStatus(string value) : base(value)
    {
    }

    public static readonly CardStatus Activated = new("ACTIVATED");

    public static readonly CardStatus NotActivated = new("NOT_ACTIVATED");

    public static readonly CardStatus Frozen = new("FROZEN");

    public static readonly CardStatus Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onActivated,
        Func<TResult> onNotActivated,
        Func<TResult> onFrozen,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Activated => onActivated(),
            _ when this == NotActivated => onNotActivated(),
            _ when this == Frozen => onFrozen(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActivated,
        Action onNotActivated,
        Action onFrozen,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Activated) onActivated();
        else if (this == NotActivated) onNotActivated();
        else if (this == Frozen) onFrozen();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
