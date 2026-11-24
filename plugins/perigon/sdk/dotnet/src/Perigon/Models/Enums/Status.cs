using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Current lifecycle status of the contact point.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Active = new("ACTIVE");

    public static readonly Status Stopped = new("STOPPED");

    public static readonly Status Failing = new("FAILING");

    public static readonly Status Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onStopped,
        Func<TResult> onFailing,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Stopped => onStopped(),
            _ when this == Failing => onFailing(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onStopped, Action onFailing, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Stopped) onStopped();
        else if (this == Failing) onFailing();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
