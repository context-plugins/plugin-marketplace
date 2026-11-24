using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC), tasks (task_count DESC)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByHudPlatformTasksetsApi>))]
public sealed record SortByHudPlatformTasksetsApi : OpenStringEnum<SortByHudPlatformTasksetsApi>
{
    private SortByHudPlatformTasksetsApi(string value) : base(value)
    {
    }

    public static readonly SortByHudPlatformTasksetsApi Starred = new("starred");

    public static readonly SortByHudPlatformTasksetsApi Date = new("date");

    public static readonly SortByHudPlatformTasksetsApi Name = new("name");

    public static readonly SortByHudPlatformTasksetsApi Stars = new("stars");

    public static readonly SortByHudPlatformTasksetsApi Tasks = new("tasks");

    public TResult Match<TResult>(Func<TResult> onStarred,
        Func<TResult> onDate,
        Func<TResult> onName,
        Func<TResult> onStars,
        Func<TResult> onTasks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Starred => onStarred(),
            _ when this == Date => onDate(),
            _ when this == Name => onName(),
            _ when this == Stars => onStars(),
            _ when this == Tasks => onTasks(),
            _ => otherwise(Value)
        };

    public void Match(Action onStarred,
        Action onDate,
        Action onName,
        Action onStars,
        Action onTasks,
        Action<string> otherwise)
    {
        if (this == Starred) onStarred();
        else if (this == Date) onDate();
        else if (this == Name) onName();
        else if (this == Stars) onStars();
        else if (this == Tasks) onTasks();
        else otherwise(Value);
    }
}
