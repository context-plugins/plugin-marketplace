using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// If the referenced entity is a Story, either "bug", "chore", or "feature".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StoryType4>))]
public sealed record StoryType4 : OpenStringEnum<StoryType4>
{
    private StoryType4(string value) : base(value)
    {
    }

    public static readonly StoryType4 Feature = new("feature");

    public static readonly StoryType4 Chore = new("chore");

    public static readonly StoryType4 Bug = new("bug");

    public TResult Match<TResult>(Func<TResult> onFeature,
        Func<TResult> onChore,
        Func<TResult> onBug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Feature => onFeature(),
            _ when this == Chore => onChore(),
            _ when this == Bug => onBug(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeature, Action onChore, Action onBug, Action<string> otherwise)
    {
        if (this == Feature) onFeature();
        else if (this == Chore) onChore();
        else if (this == Bug) onBug();
        else otherwise(Value);
    }
}
