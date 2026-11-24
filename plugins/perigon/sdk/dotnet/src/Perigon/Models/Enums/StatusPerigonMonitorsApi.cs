using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusPerigonMonitorsApi>))]
public sealed record StatusPerigonMonitorsApi : OpenStringEnum<StatusPerigonMonitorsApi>
{
    private StatusPerigonMonitorsApi(string value) : base(value)
    {
    }

    public static readonly StatusPerigonMonitorsApi Draft = new("DRAFT");

    public static readonly StatusPerigonMonitorsApi Active = new("ACTIVE");

    public static readonly StatusPerigonMonitorsApi Stopped = new("STOPPED");

    public static readonly StatusPerigonMonitorsApi Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onStopped,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Stopped => onStopped(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onStopped, Action onArchived, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Stopped) onStopped();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
