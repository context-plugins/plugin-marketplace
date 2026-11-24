using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Lifecycle state. <c>active</c> and <c>archived</c> are filterable via the List Tables <c>status</c> field; <c>deleted</c> is not a filterable status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Active = new("active");

    public static readonly Status Archived = new("archived");

    public static readonly Status Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action onDeleted, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
