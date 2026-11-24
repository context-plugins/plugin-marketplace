using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The state of the incident.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Open = new("OPEN");

    public static readonly State Resolved = new("RESOLVED");

    public static readonly State Deleted = new("DELETED");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onResolved,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Resolved => onResolved(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onResolved, Action onDeleted, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Resolved) onResolved();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
