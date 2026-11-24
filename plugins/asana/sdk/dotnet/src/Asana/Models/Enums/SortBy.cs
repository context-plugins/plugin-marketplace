using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy DueDate = new("due_date");

    public static readonly SortBy CreatedAt = new("created_at");

    public static readonly SortBy CompletedAt = new("completed_at");

    public static readonly SortBy Likes = new("likes");

    public static readonly SortBy ModifiedAt = new("modified_at");

    public TResult Match<TResult>(Func<TResult> onDueDate,
        Func<TResult> onCreatedAt,
        Func<TResult> onCompletedAt,
        Func<TResult> onLikes,
        Func<TResult> onModifiedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DueDate => onDueDate(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == CompletedAt => onCompletedAt(),
            _ when this == Likes => onLikes(),
            _ when this == ModifiedAt => onModifiedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onDueDate,
        Action onCreatedAt,
        Action onCompletedAt,
        Action onLikes,
        Action onModifiedAt,
        Action<string> otherwise)
    {
        if (this == DueDate) onDueDate();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == CompletedAt) onCompletedAt();
        else if (this == Likes) onLikes();
        else if (this == ModifiedAt) onModifiedAt();
        else otherwise(Value);
    }
}
