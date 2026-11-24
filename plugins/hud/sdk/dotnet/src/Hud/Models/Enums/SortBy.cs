using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Starred = new("starred");

    public static readonly SortBy Date = new("date");

    public static readonly SortBy Name = new("name");

    public static readonly SortBy Stars = new("stars");

    public TResult Match<TResult>(Func<TResult> onStarred,
        Func<TResult> onDate,
        Func<TResult> onName,
        Func<TResult> onStars,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Starred => onStarred(),
            _ when this == Date => onDate(),
            _ when this == Name => onName(),
            _ when this == Stars => onStars(),
            _ => otherwise(Value)
        };

    public void Match(Action onStarred, Action onDate, Action onName, Action onStars, Action<string> otherwise)
    {
        if (this == Starred) onStarred();
        else if (this == Date) onDate();
        else if (this == Name) onName();
        else if (this == Stars) onStars();
        else otherwise(Value);
    }
}
