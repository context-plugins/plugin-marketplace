using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event Created = new("created");

    public static readonly Event Rotated = new("rotated");

    public static readonly Event Revoked = new("revoked");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onRotated,
        Func<TResult> onRevoked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Rotated => onRotated(),
            _ when this == Revoked => onRevoked(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onRotated, Action onRevoked, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Rotated) onRotated();
        else if (this == Revoked) onRevoked();
        else otherwise(Value);
    }
}
